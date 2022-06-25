import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// The correct ID of the root element is the ID of the div in index.html
const rootElement = document.getElementById('root');

// For TypeScript add the non-null (!) assertion operator
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
