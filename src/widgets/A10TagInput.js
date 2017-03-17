import React from 'react';
import { A10TagInput, widgetWrapper } from 'a10-widget';

export default widgetWrapper([ 'app' ])(A10TagInput, {
  meta: {
    widget: {
      iconClassName: 'fa fa-tag',
      type: 'Field',
      name: 'A10TagInput',
      component: 'A10TagInput',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: Object.assign({}, A10TagInput.defaultProps, {
      values: [ 'Test1', 'Test2' ]
    }),
    propTypes: Object.assign({}, A10TagInput.propTypes, {
      children: React.PropTypes.string
    }),
    propGroups: {
      store: 'ignore',
      active: 'basic',
      disabled: 'advanced',
      block: 'basic',
      onClick: 'basic',
      type: 'basic',
      bsStyle: 'advanced',
      bsSize: 'advanced',
      bsClass: 'advanced',
      children: 'basic'
    }
  }
});