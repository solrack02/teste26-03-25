
// ---------- import React Packs
import * as React from 'https://esm.sh/react@18.2.0';
import * as ReactDOM from 'https://esm.sh/react-dom@18.2.0';

// ---------- import Internals
// import { Router } from './src';

export default function App() {
  return <div>Oi Gente</div>;
}

// Render the App
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>Oi Pessoal</div>
  </React.StrictMode>
);
