import React from 'react';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(ControlLabel, {
  meta: {
    widget: {
      iconClassName: 'fa fa-font',
      type: 'Bootstrap',
      name: 'ControlLabel',
      component: 'ControlLabel',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: Object.assign({}, ControlLabel.defaultProps, {
      schemaChildren: 'My ControlLabel'
    }),
    propTypes: Object.assign({}, ControlLabel.propTypes, {
      schemaChildren: React.PropTypes.string
    }),
    propGroups: {
      schemaChildren: 'basic',
      htmlFor: 'basic',
      srOnly: 'basic',
      bsClass: 'basic'
    }
  }
});
