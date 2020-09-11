import React, { createContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider: React.FC = ({children}) => (
  <FavoritesContext.Provider value = {{}}>
    {children}
  </FavoritesContext.Provider>
)
