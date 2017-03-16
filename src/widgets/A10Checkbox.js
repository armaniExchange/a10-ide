import React, { Component, PropTypes } from 'react';
import { A10Field, widgetWrapper } from 'a10-widget';

function MyA10Checkbox({ ...props }) {
  const fieldProps = { ...props };
  const value = fieldProps.value;
  delete fieldProps.value;
  return (
    <A10Field {...fieldProps}>
      <input type="checkbox" value={value} />
    </A10Field>
  );
}

export const A10Checkbox = widgetWrapper(['app'])(MyA10Checkbox, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'Field',
      name: 'A10Checkbox',
      component: 'A10Checkbox',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: {
      name: 'A10Checkbox',
      label: 'A10Checkbox'
    },
    propTypes: Object.assign({}, A10Field.propTypes, {
      name: PropTypes.object.isRequired,
      label: PropTypes.object.isRequired,
      value: PropTypes.bool,
      conditional: PropTypes.object,
      layout: PropTypes.element
    }),
    propGroups: {
      store: 'ignore',
      name: 'basic',
      label: 'basic',
      value: 'basic',
      conditional: 'basic',
      layout: 'basic'
    }
  }
});
