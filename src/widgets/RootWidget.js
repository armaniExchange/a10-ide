import React from 'react';
import { widgetWrapper } from 'a10-widget';

function RootWidget({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
    </div>
  );
}

export default widgetWrapper()(RootWidget, {
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
