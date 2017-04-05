
import { A10Radio } from 'a10-widget';

export default Object.assign(A10Radio, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10Radio',
      component: 'A10Radio',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: A10Radio.defaultProps,
    propTypes: A10Radio.propTypes,
    propGroups: {}
  }
});
