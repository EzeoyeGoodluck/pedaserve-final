import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
// Prerendered pages carry server HTML, so hydrate. Fall back to a fresh
// render for the dev server, where the root is empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
