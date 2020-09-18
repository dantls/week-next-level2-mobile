import React from 'react';
import { useFocusEffect } from '@react-navigation/native'

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemProps } from '../../components/TeacherItem';
import { ScroolView } from '../TeacherList/styles';
import { useFavorites } from '../../contexts/favorites';

const Favorites:React.FC = () => {

  const { favorites , loadFavorites } = useFavorites();

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
    {favorites && favorites.map((item:TeacherItemProps) => {

      return(
        <TeacherItem
          favorited
          key={item.classes.id}
          classes={item.classes}
        />
      )
    })}
  </ScroolView>
  </>
  )
}

export default Favorites;
