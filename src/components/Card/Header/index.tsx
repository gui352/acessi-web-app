import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

export const Header = ({ portalName, logoSrc }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <img alt={`${portalName} Logo`} src={logoSrc} style={{ width: 30, marginRight: 8, borderRadius: 3 }} />
      <Text strong>{portalName}</Text>
    </div>
  );
};
