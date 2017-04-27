import React, { Component, PropTypes } from 'react';

import { A10Field, A10FormControl, A10Checkbox, A10DynamicSelect, A10Radio } from '@a10/a10-widget';


function renderInput(inputType, selectOptions) {
  switch (inputType) {
    case 'text':
    case 'textarea':
      return <A10FormControl />;
    case 'select':
      return (
        <A10FormControl componentClass="select">
          {
            (selectOptions || []).map((item, index) => {
              return <options key={index} value={item}>{item}</options>;
            })
          }
        </A10FormControl>
      );
    case 'checkbox':
      return <A10Checkbox />;
    case 'radio':
      return <A10Radio />;
    case 'dynamicSelect':
      return <A10DynamicSelect />;
  }
};

function MyA10Field(props) {
  const { inputType, selectOptions, conditional } = props;

  const fieldConditional = {};
  fieldConditional[conditional] = true;

  return (
    <div className="editable-component-wrapper">
      <A10Field {...props} conditional={fieldConditional}>
        {renderInput(inputType, selectOptions)}
      </A10Field>
    </div>
  );
}

export default Object.assign(A10Field, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10Field',
      component: 'A10Field',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: {
      name: 'A10Field',
      label: 'A10Field',
      inputType: 'input',
      value: '',
      conditional: null,
      //children: <A10FormControl />
    },
    propTypes: {
      ...A10Field.propTypes,
      inputType: PropTypes.oneOf(['input', 'textarea', 'checkbox', 'radio', 'dynamicSelect']),
      selectOptions: PropTypes.array
    },
    propGroups: {
      name: 'basic',
      label: 'basic',
      conditional: 'basic',
      inputType: 'basic',
      selectOptions: 'select'
    }
  }
});
