import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App';
import { Global } from '@/globalStyle';
import { store } from '@/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
