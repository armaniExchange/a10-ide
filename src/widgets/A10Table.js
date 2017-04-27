import React, { Component, PropTypes } from 'react';
import { StandardPageLayout, A10Table, A10TableColumn } from '@a10/a10-widget';

class MyA10Table extends Component {

  defaultProps = {
    fieldName: [],
    fieldTitle: [],
    primaryField: ''
  };

  renderFields() {
    const { fieldName, fieldTitle, primaryField } = this.props;
    if (fieldName.length === 0) return [];

    let result = [];
    if (primaryField) {
      result.push((
        <A10TableColumn key={0} dataField={primaryField} checkbox style={{ width:'20px' }}  />
      ));
    }
    result = result.concat(fieldName.map((value, index) => {
      return (
        <A10TableColumn key={index+1} dataField={value}>{(fieldTitle && fieldTitle[index]) || value}</A10TableColumn>
      );
    }));
    return result;
  }

  render() {
    const { fields, primaryField, title, description } = this.props;
console.log(A10Table);
    return (
        <A10Table {...this.props}>
          {this.renderFields()}
        </A10Table>
    );
  }

}

export default Object.assign(MyA10Table, {
  meta: {
    widget: {
      iconClassName: 'fa fa-wpforms',
      type: 'A10 Widget',
      name: 'A10Table',
      component: 'A10Table',
      display: 'inline-block',
      isContainer: true,
      description: ''
    },
    defaultProps: {
      ...A10Table.defaultProps,
      fieldName: [],
      fieldTitle: [],
      primaryField: '',
      action: '',
      dataKey: ''
    },
    propTypes: {
      ...A10Table.propTypes,
      fieldName: PropTypes.array,
      fieldTitle: PropTypes.array,
      primaryField: PropTypes.string
    },
    propGroups: {
      title: 'basic',
      description: 'basic',
      fieldName: 'basic',
      fieldTitle: 'basic',
      primaryField: 'basic'
    }
  }
});
