import React, { useState, useEffect } from 'react';
import { Page } from '../utils/pages';

const VisitedPagesViewer: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    // Fetch pages from API or local storage
    // This is a placeholder, replace with actual implementation
    fetch('/api/pages')
      .then(response => response.json())
      .then(data => setPages(data));
  }, []);

  return (
    <div id="visited-pages-viewer">
      <h2>Páginas visitadas</h2>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <p>{page.url}</p>
            <p>{page.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitedPagesViewer;