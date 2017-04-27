import React from 'react';
import fuzzy from 'fuzzy';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import GroupComponentCandidate from './GroupComponentCandidate';

export default class LeftPanelLayout extends React.Component {
  static propTypes = {
    searchingLayoutName: React.PropTypes.string,
    layouts: React.PropTypes.object.isRequired,
    onLayoutChange: React.PropTypes.func,
    addComponentByClicking: React.PropTypes.func,
    tileStyle: React.PropTypes.object,
    onSearchingLayoutName: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchingLayoutName,
      layouts,
      tileStyle,
      onSearchingLayoutName,
      addComponentByClicking,
      onLayoutChange
    } = this.props;
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search layouts"
              value={searchingLayoutName}
              onChange={onSearchingLayoutName}
            />
            <InputGroup.Addon>
              <i className="fa fa-search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          searchingLayoutName && (
            <Panel header={
              <div>
                <span>Search Result</span>
                <i className="fa fa-close pull-right" style={{ cursor: 'pointer' }} onClick={this.clearSearchingLayoutName}/>
              </div>
            }>
              {
                fuzzy.filter(searchingLayoutName, Object.values(layouts), {
                  pre: '<strong style="color: blue;">',
                  post: '</strong>',
                  extract: item => item.name
                })
                .map(item=> Object.assign({}, item.original, {
                  name: (
                    <span dangerouslySetInnerHTML={{ __html: item.string }}/>
                  )
                }))
                .map((item, index) => {
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
          )
        }

        <PanelGroup accordion defaultActiveKey="basic">
          <Panel header="basic" eventKey="basic" key="basic">
            {
              Object.values(layouts)
              .map((item, index)=>{
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
        </PanelGroup>
      </div>
    );
  }
}
