import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(FormGroup, {
  meta: {
    widget: {
      iconClassName: 'fa fa-wpforms',
      type: 'Bootstrap Container',
      name: 'FormGroup',
      component: 'FormGroup',
      display: 'block',
      isContainer: true,
      description: '',
      isWrapperItself: true
    },
    defaultProps: Object.assign({}, FormGroup.defaultProps),
    propTypes: Object.assign({}, FormGroup.propTypes),
    propGroups: {
    }
  }
});
