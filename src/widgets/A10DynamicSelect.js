
import { A10DynamicSelect } from '@a10/a10-widget';

export default Object.assign(A10DynamicSelect, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10DynamicSelect',
      component: 'A10DynamicSelect',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: A10DynamicSelect.defaultProps,
    propTypes: A10DynamicSelect.propTypes,
    propGroups: {}
  }
});
