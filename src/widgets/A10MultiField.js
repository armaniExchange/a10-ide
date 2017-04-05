import React from 'react';

import { A10MultiField, A10Field, A10FormControl } from 'a10-widget';

// function MyA10MultiField(props) {
//   return (
//     <div className="editable-component-wrapper">
//       <A10MultiField {...props}>
//         {props.fields}
//       </A10MultiField>
//     </div>
//   );
// }

export default Object.assign(A10MultiField, {
  meta: {
    widget: {
      iconClassName: 'fa fa-rocket',
      type: 'A10 Widget - Form',
      name: 'A10MultiField',
      component: 'A10MultiField',
      display: 'inline-block',
      isContainer: false,
      description: ''
    },
    defaultProps: {
      name: 'A10MultiField',
      label: 'A10MultiField',
      fields: [
        (
          <A10Field name="port-number" title="Port Number" searchable={true} primary={true}>
            <A10FormControl />
          </A10Field>
        ),
        (
          <A10Field name="range" title="Port Range">
            <A10FormControl />
          </A10Field>
        ),
        (
          <A10Field layout={false} name="protocol" title="Protocol" value="tcp">
            <A10FormControl componentClass="select" value="tcp">
              <option value="tcp">tcp</option>
              <option value="udp">udp</option>
            </A10FormControl>
          </A10Field>
        )
      ],
      modalOptions: {
        title: 'Title',
        bsSize: 'super',
        form: null,
        onError: () => {}
      }
    },
    propTypes: {
      ...A10MultiField.propTypes
    },
    propGroups: {
      name: 'basic',
      conditional: 'basic',
      modalOptions: 'basic'
    }
  }
});
