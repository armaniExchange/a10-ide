import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(Button, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'Bootstrap',
      name: 'Button',
      component: 'Button',
      display: 'inline-block',
      isContainer: false,
      description: '',
      isWrapperItself: true
    },
    defaultProps: Object.assign({}, Button.defaultProps, {
      schemaChildren: 'My Button'
    }),
    propTypes: Object.assign({}, Button.propTypes, {
      schemaChildren: React.PropTypes.string
    }),
    propGroups: {
      active: 'basic',
      disabled: 'advanced',
      block: 'basic',
      onClick: 'Event',
      type: 'basic',
      bsStyle: 'advanced',
      bsSize: 'advanced',
      bsClass: 'advanced',
      href: 'basic',
      componentClass: 'advanced',
      schemaChildren: 'basic'
    }
  }
});
