import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native'

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import AsyncStorage from '@react-native-community/async-storage';
import TeacherItem, { Classes } from '../../components/TeacherItem';
import { ScroolView } from '../TeacherList/styles';

const Favorites:React.FC = () => {
  const [favorites, setFavorites] = useState<Classes[]>([]);
  function loadFavorites () {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    })
  }
  useFocusEffect(()=>{
    loadFavorites();
  });
  return(<>
    <Container>
      <PageHeader title="Meus Proffys Favoritos"/>
    </Container>
    <ScroolView
    contentContainerStyle={{
      paddingHorizontal: 14,
      paddingBottom: 14,
    }}
  >
    {favorites.map((item:Classes) => {

      return(
        <TeacherItem
          favorited
          key={item.id}
          classes={item}
        />
      )
    })}
  </ScroolView>
  </>
  )
}

export default Favorites;
