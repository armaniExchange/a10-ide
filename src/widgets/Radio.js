import React from 'react';
import Radio from 'react-bootstrap/lib/Radio';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(Radio, {
  meta: {
    widget: {
      iconClassName: 'fa fa-dot-circle-o',
      type: 'Bootstrap',
      name: 'Radio',
      component: 'Radio',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: Object.assign({}, Radio.defaultProps),
    propTypes: Object.assign({}, Radio.propTypes),
    propGroups: {
      inline: 'basic',
      disabled: 'basic',
      validationState: 'advanced',
      inputRef: 'ignore',
      bsClass: 'basic'
    }
  }
});
