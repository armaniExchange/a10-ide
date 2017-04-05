import React from 'react';

import { A10SubmitButtons } from 'a10-widget';

function MyA10SubmitButtons({ ...props }) {
  let newProps = {};
  return (
    <div className="editable-component-wrapper">
      {props.children}
      <A10SubmitButtons {...newProps} />
    </div>
  );
}

export default Object.assign(MyA10SubmitButtons, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10SubmitButtons',
      component: 'A10SubmitButtons',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: A10SubmitButtons.defaultProps,
    propTypes: A10SubmitButtons.propTypes,
    propGroups: {}
  }
});
