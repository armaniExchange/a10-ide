import React from 'react';

import { A10Form } from '@a10/a10-widget';

function MyA10Form({ ...props }) {
  const { children, ...rest } = props;
  // schemaChildren
  if (!children) return null;
  const fieldChilds = children.slice(0, children.length - 1);
  const submitChilds = children.slice(-1);
  return (
    <div className="editable-component-wrapper">
      <A10Form {...rest}>
        {fieldChilds}
        {submitChilds}
      </A10Form>
    </div>
  );
}

export default Object.assign(MyA10Form, {
  meta: {
    widget: {
      iconClassName: 'fa fa-wpforms',
      type: 'A10 Widget - Form',
      name: 'A10Form',
      component: 'A10Form',
      display: 'block',
      isContainer: true,
      description: ''
    },
    defaultProps: {
      horizontal: true,
      schemaChildren: null,
      submit: null,

      action: '/axapi/v3/slb/virtual-server/',
      method: 'post'
    },
    propTypes: A10Form.propTypes,
    propGroups: {
      action: 'basic'
    }
  }
});
