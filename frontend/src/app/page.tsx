// frontend/src/app/page.tsx
import React from 'react';
import { payloadConfig } from '../payload.config';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Restrowork</h1>
      <p>API URL: {payloadConfig.apiUrl}</p>
    </div>
  );
};

export default HomePage;
