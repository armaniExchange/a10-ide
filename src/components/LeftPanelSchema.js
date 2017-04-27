import React from 'react';
import fuzzy from 'fuzzy';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Select from 'react-select';

import allSchemas from 'a10-schemas/all-schemas.json';
import GroupComponentCandidate from './GroupComponentCandidate';


export default class LeftPanelSchema extends React.Component {
  static propTypes = {
    selectedSchema: React.PropTypes.string,
    tileStyle: React.PropTypes.object,
    schemaWidgets: React.PropTypes.array,
    schemaLayouts: React.PropTypes.array,
    ComponentCandidate: React.PropTypes.func,
    addComponentByClicking: React.PropTypes.func,
    onLayoutChange: React.PropTypes.func,
    onSchemaSelect: React.PropTypes.func
  };

  static defaultProps = {
    schemaWidgets: [],
    schemaLayouts: [],
    selectedSchema: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  onInputChange = (value) => {
    this.setState({ inputText: value });
  }

  render() {
    const {
      selectedSchema,
      tileStyle,
      schemaWidgets,
      schemaLayouts,
      ComponentCandidate,
      addComponentByClicking,
      onLayoutChange,
      onSchemaSelect
    } = this.props;
    const dragableTileStyle = Object.assign({ cursor: 'move' }, tileStyle);
    const options = fuzzy.filter(this.state.inputText, allSchemas)
      .map(el=> ({ value: el.string, label: el.string }));
    return (
      <div>
        <FormGroup>
          <Select
            name="form-field-name"
            value={selectedSchema}
            options={options}
            filterOption={()=>true}
            onChange={onSchemaSelect}
            onInputChange={this.onInputChange}
          />
        </FormGroup>
        <PanelGroup accordion defaultActiveKey="Layout">
          <Panel header="Layout" eventKey="Layout" key="Layout">
            {
              schemaLayouts.map((item, index)=>{
                return (
                  <GroupComponentCandidate
                    key={index}
                    style={tileStyle}
                    addComponentByClicking={addComponentByClicking}
                    onLayoutChange={onLayoutChange}
                    name={item.name}
                    schema={item.schema}
                    iconClassName={item.iconClassName}
                  />
                );
              })
            }
          </Panel>
          <Panel header="Widget" eventKey="Widget" key="Widget">
            {
              schemaWidgets.map((item, index) => {
                return (
                  <ComponentCandidate
                    key={index}
                    style={dragableTileStyle}
                    component={item.component}
                    addComponentByClicking={addComponentByClicking}
                    meta={ { defaultProps: item.defaultProps } }
                  />
                );
              })
            }
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
