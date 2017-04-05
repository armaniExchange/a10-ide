import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Highlight from 'react-highlight';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import editableUtils from '../utils/editableUtils';
import './MainPanel.scss';
import ComponentPath from './ComponentPath';

export default class MainPanel extends React.Component {
  static propTypes = {
    editingComponentId: PropTypes.string,
    schema: PropTypes.object,
    startToEditComponent: PropTypes.func,
    deleteComponent: PropTypes.func,
    moveComponent: PropTypes.func,
    saveLayout: PropTypes.func,
    downloadFile: PropTypes.func,
    editingPath: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa-th',
      type: 'basic',
      name: 'newLayout',
      activeKey: 1
    };
  }

  onIconChange = (event) => {
    this.setState({
      icon: event.target.value
    });
  }

  onTypeChange = (event) => {
    this.setState({
      type: event.target.value
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  generateSchemaCode = (withExportDefault = true) => {
    const { schema } = this.props;
    const {
      icon,
      type,
      name
    } = this.state;
    return (withExportDefault ? 'export default ' : '') + JSON.stringify({
      iconClassName: `fa ${icon}`,
      type,
      name,
      schema
    }, (key, value) => {
      if (key[0] === '_') {
        return undefined;
      }
      return value;
    }, 2).replace(/\"([^(\")"]+)\":/g,'$1:');
  }

  downloadJsxFile = () => {
    const { schema, downloadFile } = this.props;
    const { name } = this.state;
    downloadFile(name, editableUtils.generateReactCodeFromSchema(name, schema));
  }

  downloadSchemaFile = () => {
    const { downloadFile } = this.props;
    const { name } = this.state;
    downloadFile(`${name}-schema`, this.generateSchemaCode());
  }

  saveLayout = () => {
    const {
      icon,
      type,
      name
    } = this.state;
    const { schema } = this.props;
    this.props.saveLayout({
      iconClassName: `fa ${icon}`,
      type,
      name,
      schema
    });
  }

  onSelect = (key) => {
    console.log('key:' + key);
    this.setState({ activeKey: key });
  }

  renderButtonGroup = () => {
    return (
      <ButtonToolbar className="pull-right">
        <Button bsStyle="primary" onClick={this.saveLayout} >
          <i className="fa fa-save"/>&nbsp;Save
        </Button>
        <Button onClick={this.downloadJsxFile} >
          <i className="fa fa-download"/>&nbsp;Download
        </Button>
      </ButtonToolbar>
    )
  }

  render() {
    const {
      editingComponentId,
      schema,
      startToEditComponent,
      deleteComponent,
      moveComponent,
      editingPath
    } = this.props;

    const {
      icon,
      type,
      name,
      activeKey
    } = this.state;

    const schemaWithPath = editableUtils.appendPath(Object.assign({}, schema));
    return (
      <div>
        <Tabs activeKey={activeKey} onSelect={this.onSelect} id="sandbox-main-area">
          <Tab eventKey={1} title={<span><i className="fa fa-pencil" />&nbsp;Edit</span>}>
            <div>
              <Panel>
                {
                  editableUtils.jsonToComponent(schemaWithPath, true, { editingComponentId }, {
                    startToEditComponent,
                    deleteComponent,
                    moveComponent
                  })
                }
              </Panel>
              <ComponentPath path={editingPath} />
            </div>
          </Tab>
          <Tab eventKey={2} title={<span><i className="fa fa-eye" />&nbsp;Preview</span>}>
            <Panel>
              { editableUtils.jsonToComponent(schema, false) }
            </Panel>
          </Tab>
          <Tab eventKey={3} title={<span><i className="fa fa-code" />&nbsp;Code</span>}>
            <Highlight
              style={{ maxHeight: 400, overflowY: 'scroll' }}
              className="javascript"
            >
              { editableUtils.generateReactCodeFromSchema(name, schema) }
            </Highlight>
          </Tab>
          <Tab eventKey={4} title={<span><i className="fa fa-codepen" />&nbsp;Schema</span>}>
            <Highlight
              className="javascript"
            >
              { this.generateSchemaCode() }
            </Highlight>
          </Tab>
          <Tab eventKey={5} title={<span><i className="fa fa-gear" />&nbsp;Properties</span>}>
          <Panel>
            <Form horizontal>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Type
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.onTypeChange}
                    value={type}
                    placeholder="type"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.onNameChange}
                    value={name}
                    placeholder="name"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Icon
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.onIconChange}
                    value={icon}
                    placeholder="icon"
                  />
                </Col>
              </FormGroup>
            </Form>
          </Panel>
          </Tab>
        </Tabs>
        {this.renderButtonGroup()}
      </div>
    );
  }
}
