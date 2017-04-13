import React from 'react';
import { widgetWrapper, A10App } from 'a10-widget';

function RootWidget({ children }) {
  // return (
  //   <div style={{ position: 'relative' }}>
  //     {children}
  //   </div>
  // );

  const getAuthToken = () => {
    return sessionStorage.getItem('token');
  };

  return (
    <div style={{ position: 'relative' }}>
      <A10App getAuthToken={getAuthToken}>
        {children}
      </A10App>
    </div>
  );
}

export default Object.assign(RootWidget, {
  meta: {
    widget: {
      name: 'RootWidget',
      component: 'RootWidget',
      isContainer: true,
      hideFromCandidates: true,
      description: '',
      isWrapperItself: true
    }
  }
});

// export default widgetWrapper()(RootWidget, {
//   meta: {
//     widget: {
//       name: 'RootWidget',
//       component: 'RootWidget',
//       isContainer: true,
//       hideFromCandidates: true,
//       description: '',
//       isWrapperItself: true
//     }
//   }
// });
