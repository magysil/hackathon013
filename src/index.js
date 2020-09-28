import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {FirebaseAppProvider} from 'reactfire'; 
import {firebase} from './firebaseConfig.js';

ReactDOM.render((
<FirebaseAppProvider FirebaseConfig={firebase}>
  <React.StrictMode>
    <Suspense fallback={'Conectando la app...'}>
      <App />
    </Suspense>    
  </React.StrictMode>
</FirebaseAppProvider>
),
  document.getElementById('root'));


