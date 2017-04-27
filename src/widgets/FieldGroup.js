import React from 'react';
import FieldGroup from './source/FieldGroup';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(FieldGroup, {
  meta: {
    widget: {
      iconClassName: 'fa fa-object-group',
      type: 'Field',
      name: 'FieldGroup',
      component: 'FieldGroup',
      description: ''
    },
    defaultProps: {
      label: 'label',
      required: false,
      type: 'text',
      pattern: null,
      typeMismatchErrorMessage: 'Validation failed!',
      requiredErrorMessage: 'This field is required'
    },
    propTypes: FieldGroup.propTypes,
    propGroups: {
      label: 'basic',
      required: 'basic',
      type: 'basic',
      pattern: 'advanced',
      typeMismatchErrorMessage: 'basic',
      requiredErrorMessage: 'basic'
    }
  }
});
