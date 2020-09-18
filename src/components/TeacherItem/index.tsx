import React, {useState} from 'react';
import api from '../../services/api';
import {Linking} from 'react-native';
import FavoriteButton from '../FavoriteButton';
import ContactButton from '../ContactButton';
import AsyncStorage from '@react-native-community/async-storage';

export interface User{
  id: string;
  avatar:string;
  bio:string;
  name: string;
  whatsapp: string;
}
export interface Classes{
  id: string;
  user: User;
  subject: string;
  cost: number;
}
export interface TeacherItemProps{
  classes:Classes;
  favorited: boolean;
}

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  ProfileContent,
  ProfileInfo,
  ProfileImage,
  ProfileTextName,
  ProfileTextSubject,
  ProfileTextBio,
  TextPriceValue,
  Footer,
  ButtonsContainer,
} from './styles';
import { useFavorites } from '../../contexts/favorites';

const TeacherItem: React.FC<TeacherItemProps> = (item: TeacherItemProps) => {
  const { isFavorite } = useFavorites();

  const {id, avatar,name,bio,whatsapp} =item.classes.user;
  const {subject,cost} =item.classes;

  const handleLinkWhatsapp = async () => {
    await api.post('/connections', {
      user_id: id,
    })
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }

  const handleToggleFavorite = async () => {
    // console.log(item);
    // await item.favorited = true;
    // console.log(item);

    await isFavorite(item);

    //const favorites = await AsyncStorage.getItem('favorites');

    // let favoritesArray:any = [];

    //  if(favorites){
    //    favoritesArray = favorites;
    //  }
    // if(isFavorited){
    //   const favoriteIndex = favoritesArray.findIndex( (teacherItem:TeacherItemProps) => {

    //     return teacherItem.classes.user.id === classes.user.id;
    //   });
    //   favoritesArray.splice(favoriteIndex,1);
    // } else{
    //   favoritesArray.push(classes);
    // }
    // await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

  }

  return (
    <Container>
      <ProfileContent>
        <ProfileImage
          source={{uri: avatar}}
        />
        <ProfileInfo>
            <ProfileTextName>
              {name}
            </ProfileTextName>
            <ProfileTextSubject>
              {subject}
            </ProfileTextSubject>
        </ProfileInfo>
      </ProfileContent>
      <ProfileTextBio>
        {bio}
      </ProfileTextBio>
      <Footer>
        <TextPriceValue>Preço/hora {'  '} R$ {cost}</TextPriceValue>
        <ButtonsContainer>
          <FavoriteButton
            color={'#8257e5'}
            onPress={handleToggleFavorite}
            img={item.favorited ? unFavoriteIcon : heartOutlineIcon }
          />
          <ContactButton
            onPress={handleLinkWhatsapp}
            color={'#04d361'}
            img={whatsappIcon}
          >
            Entrar em contato
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}
export default TeacherItem;
