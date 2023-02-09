import React from 'react';
import { Container } from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<div>404 no found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
