import React from 'react';

import { FavoritesProvider } from './favorites';

const AppProvider: React.FC = ({ children }) => (
  <FavoritesProvider>{children}</FavoritesProvider>
);

export default AppProvider;
