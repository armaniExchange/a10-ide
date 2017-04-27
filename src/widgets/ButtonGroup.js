import React from 'react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

import { widgetWrapper } from '@a10/a10-widget';

export default widgetWrapper()(ButtonGroup, {
  meta: {
    widget: {
      iconClassName: 'fa fa-folder',
      type: 'Bootstrap Container',
      name: 'ButtonGroup',
      component: 'ButtonGroup',
      display: 'inline-block',
      isContainer: true,
      description: '',
      isWrapperItself: true
    },
    defaultProps:  ButtonGroup.defaultProps,
    propTypes: ButtonGroup.propTypes,
    propGroups: {
      vertical: 'basic',
      justified: 'basic',
      block: 'basic',
      bsClass: 'advanced'
    }
  }
});
