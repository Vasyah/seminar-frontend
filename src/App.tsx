import React from 'react';
import { Container } from './components/Container/Container';
import { ConfigProvider } from 'antd/lib';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function App() {
  const theme: ThemeConfig = {
    components: { Input: {} },
  };
  return (
    <ConfigProvider
      theme={{
        // token: {
        //   borderRadius: 4,
        //   colorPrimary: '#000',
        // },
        components: {
          Input: { fontSize: 24 },
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Container />}>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<div>404 no found</div>} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
