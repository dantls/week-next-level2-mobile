import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { TeacherItemProps } from '../components/TeacherItem';

export interface FavoritesContextData{
  loadFavorites(): Promise<void>;
  isFavorite(item: TeacherItemProps): Promise<void>;
  favorites:TeacherItemProps[];
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

const FavoritesProvider: React.FC = ({children}) => {
  const [favorites, setFavorites] = useState<TeacherItemProps[]>([]);

  useEffect(() => {
    async function initial(){
      await loadFavorites();
    }
    initial();
  }, []);

  const isFavorite = useCallback(async (item:TeacherItemProps) => {

  setFavorites(
          favorites.map(favorite =>
          favorite.classes.id === item.classes.id
          ? { ...favorite, favorited: !item.favorited }
          : favorite
      ),
  );

  },[]);

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('favorites');
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
  },[]);

  return(
    <FavoritesContext.Provider value={{ isFavorite,loadFavorites , favorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavorites() {

  const {favorites, loadFavorites , isFavorite} = useContext(FavoritesContext);

  return {favorites, loadFavorites,isFavorite} ;
}

export { FavoritesProvider, useFavorites };
