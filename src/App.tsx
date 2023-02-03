import React from 'react';
import { Container } from './components/Container/Container';
import { ConfigProvider } from 'antd/lib';
import { ThemeConfig } from 'antd/es/config-provider/context';

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
      <Container />
    </ConfigProvider>
  );
}

export default App;
