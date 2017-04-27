import React from 'react';

import { A10FormControl } from '@a10/a10-widget';

export default Object.assign(A10FormControl, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10FormControl',
      component: 'A10FormControl',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: A10FormControl.defaultProps,
    propTypes: A10FormControl.propTypes,
    propGroups: {}
  }
});
