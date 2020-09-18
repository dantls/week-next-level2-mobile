import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState } from 'react';
import { Classes } from '../components/TeacherItem';
export interface FavoritesContextData{
  classe:object;
  user: object;
  favorited: boolean;
  loadFavorites: ()=>{};
  favorites:Classes[];
}


const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export const FavoritesProvider: React.FC = ({children}) => {
  const [favorites, setFavorites] = useState<Classes[]>([]);



  async function loadFavorites () {
    const response = await AsyncStorage.getItem('favorites');
      if(response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
  }

  return(
    <FavoritesContext.Provider value = {{loadFavorites,favorites, classe: {}, favorited: false, user:{} }}>
      {children}
    </FavoritesContext.Provider>
  )
  }
export default FavoritesContext;
