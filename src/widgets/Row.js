import React from 'react';
import Row from 'react-bootstrap/lib/Row';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(Row, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'Bootstrap Container',
      name: 'Row',
      component: 'Row',
      display: 'block',
      isContainer: true,
      description: '',
      isWrapperItself: true
    },
    defaultProps: Object.assign({}, Row.defaultProps),
    propTypes: Object.assign({}, Row.propTypes),
    propGroups: {
      componentClass: 'basic',
      bsClass: 'basic'
    }
  }
});
