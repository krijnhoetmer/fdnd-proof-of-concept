import React from 'react';
import { createRoot } from 'react-dom/client';
import Chart from './components/Chart.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('chart-container');
    if (container) {
      const root = createRoot(container);
      root.render(<Chart />);
    } else {
      console.error('Could not find the container element to mount the React component.');
    }
});