import { Spin } from 'antd';
import React from 'react';

const Loader = () => {
  return (
    <Spin tip="Loading" size="large" style={{position: 'absolute', alignItems: "center", height: "100vh", display: "flex"}}>
    </Spin>
  );
};

export default Loader;