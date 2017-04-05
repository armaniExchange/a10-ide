import React from 'react';
import { Navbar, Grid, Col, Row, Button } from 'react-bootstrap';
import _ from 'lodash';
import 'highlight.js/styles/github.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext as dragDropContext } from 'react-dnd';
import Draggable from 'react-draggable';
import { saveAs } from 'file-saver';

import allLayouts from './layouts';
import allWidgets from './widgets';

import ComponentBuilderProperties from './components/ComponentBuilderProperties/ComponentBuilderProperties';
// import slbVirtualServerSchema from 'schemas/slb-virtual-server.json';

import LeftPanel from './components/LeftPanel';
import MainPanel from './components/MainPanel';
import editableUtils from './utils/editableUtils';

import { registerWidgetPlugins } from 'a10-widget';
import { SchemaPlugin } from 'a10-widget-lib';

registerWidgetPlugins([ SchemaPlugin ]);

const urlParams = {
  'name': 'vs2',
  'port-number': 80,
  'protocol': 'http'
};

const metaWithSchema = {
  // schema: 'slb-virtual-server.port-list',
  name: 'virtual-server.port.port-number'
  // initial: '80'
  // loadInitial: true,
  // urlParams
};

// const { handleSubmit,  ...rest } = this.props; // eslint-disable-line
const metaWithEndpoint = {
  // endpoint: '/axapi/v3/slb/virtual-server/vs2', // pre
  name: 'virtual-server.name'
};

const containerSchema = {
  // schema: 'slb-virtual-server',
  endpoint: '/axapi/v3/slb/virtual-server/',
  name: 'virtual-server.description',
  initial: 'test description',
  loadInitial: true,
  urlParams
};

const objectSchema = {
  // schema: slbVirtualServerSchema,
  name: 'virtual-server.netmask'
  // initial: '/24',
  // loadInitial: true,
  // urlParams
};

const noSchemaData = {
  name: 'virtual-server.ip-address'
  // initial: '192.168.4.4',
  // loadInitial: true
};


const reactSchemaSource = {
  _componentId: 'root',
  component: 'RootWidget',
  schemaChildren: [
    {
      _componentId: "form",
      component: "A10Form",
      name: "SlbCommonConnRateLimitForm",
      schema: "slb-common-conn-rate-limit",
      horizontal: true,
      schemaChildren: [
        {
          _componentId: "ip",
          component: "A10Field",
          name: "conn-rate-limit.src-ip-list",
          label: "Src Ip List"
        },
        {
          _componentId: "submit",
          component: "A10SubmitButtons"
        }
      ]
    }
  ],
  _isRoot: true
};


@dragDropContext(HTML5Backend)
export default class Sandbox extends React.Component {

  constructor(props) {
    super(props);
    editableUtils.registerComponents(allWidgets);
    this.state = {
      reactSchema: reactSchemaSource,
      editingComponentId: null,
      componentProps: null,
      componentMeta: null,
      minimizeLeftPanel: false,
      showRightPanel: false,
      editingPath: null,
      savedLayouts: JSON.parse(localStorage['savedLayouts'] || '{}')
    };
  }

  startToEditComponent = (args) => {
    const { componentMeta, componentProps, path } = args;
    this.setState({
      editingComponentId: componentProps._componentId,
      editingComponentProps: componentProps,
      editingComponentMeta: componentMeta,
      editingPath: path,
      showRightPanel: true
    });
  }

  deleteComponent = (_componentId) => {
    const newSchema = editableUtils.deleteComponent(this.state.reactSchema, _componentId);
    this.setState({
      reactSchema: newSchema,
      editingComponentId: null,
      editingComponentProps: null,
      editingComponentMeta: null,
      editingPath: null,
      showRightPanel: false
    });
  }

  moveComponent = _.throttle((dragComponent, dropComponentId, newPosition) => {
    const newSchema = editableUtils.moveComponent(this.state.reactSchema, dragComponent, dropComponentId, newPosition);
    this.setState({ reactSchema: newSchema });
  }, 100)

  updateComponent = (_componentId, component) => {
    const newSchema = editableUtils.updateComponent(this.state.reactSchema, _componentId, component);
    this.setState({
      reactSchema: newSchema,
      editingComponentProps: component
    });
  }

  stopEditingComponent = () => {
    this.setState({
      editingComponentId: null,
      showRightPanel: false
    });
  }

  saveLayout = (layout) => {
    const { savedLayouts } = this.state
    const newSavedLayouts = Object.assign({}, savedLayouts, {[layout.name] : layout});
    localStorage['savedLayouts'] = JSON.stringify(newSavedLayouts);
    this.setState({
      savedLayouts: newSavedLayouts
    });
  }

  downloadFile = (filename, content)=> {
    var blob = new Blob([ content ], { type: 'text/javascript;charset=utf-8' });
    saveAs(blob, `${filename}.js`);
  }

  onLayoutChange = (schema)=>{
    this.setState({
      reactSchema: editableUtils.loadSchema(schema)
    });
  }

  addComponentByClicking = (dragComponent) => {
    const {
      editingComponentId,
      editingComponentMeta
    } = this.state;
    if (editingComponentId && editingComponentMeta.widget.isContainer) {
      this.moveComponent(dragComponent, editingComponentId, true, 'inside');
    } else {
      this.moveComponent(dragComponent, 'root', true, 'inside');
    }
  }

  toggleLeftPanel = () =>{
    this.setState({
      minimizeLeftPanel: !this.state.minimizeLeftPanel
    });
  }

  render() {
    const {
      reactSchema,
      editingComponentId,
      editingComponentProps,
      editingComponentMeta,
      editingPath,
      minimizeLeftPanel,
      showRightPanel,
      savedLayouts
    } = this.state;

    const displayLayouts = Object.assign({}, allLayouts, savedLayouts);
    const Header = () => {
      return (
        <Navbar staticTop={true} fluid={true}>
          <Navbar.Header>
            <Button onClick={this.toggleLeftPanel} style={{ margin: 8 }} className="pull-left">
              <i className={`fa fa-arrow-${minimizeLeftPanel ? 'right' : 'left'}`} />
            </Button>
            <Navbar.Brand>
              <a href="#">A10 UI generator</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      );
    };
    return (
      <div>
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col xs={minimizeLeftPanel ? 0 : 3}>
              {
                minimizeLeftPanel ? null : (
                  <LeftPanel
                    widgets={allWidgets}
                    layouts={displayLayouts}
                    onLayoutChange={this.onLayoutChange}
                    addComponentByClicking={this.addComponentByClicking}
                  />
                )
              }

            </Col>
            <Col xs={9 + (minimizeLeftPanel ? 3 : 0)}>
              <MainPanel
                editingComponentId={editingComponentId}
                schema={reactSchema}
                editingPath={editingPath}
                startToEditComponent={this.startToEditComponent}
                deleteComponent={this.deleteComponent}
                moveComponent={this.moveComponent}
                saveLayout={this.saveLayout}
                downloadFile={this.downloadFile}
              />
            </Col>
            <Draggable handle=".panel-heading">
              <Col xs={showRightPanel ? 4 : 0} style={{ position: 'absolute', right: 20 }}>
                <ComponentBuilderProperties
                  editingComponentId={editingComponentId}
                  componentProps={editingComponentProps}
                  componentMeta={editingComponentMeta}
                  updateComponent={this.updateComponent}
                  stopEditingComponent={this.stopEditingComponent}
                />
              </Col>
            </Draggable>
          </Row>
        </Grid>
      </div>
    );
  }
}
