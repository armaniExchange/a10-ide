
import { A10Checkbox } from 'a10-widget';

export default Object.assign(A10Checkbox, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10Checkbox',
      component: 'A10Checkbox',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: A10Checkbox.defaultProps,
    propTypes: A10Checkbox.propTypes,
    propGroups: {}
  }
});
