import React, {useState, useContext} from 'react';
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

const TeacherItem: React.FC<TeacherItemProps> = ({classes, favorited}) => {

  const [isFavorited, setIsFavorited] = useState(favorited);
  const {id, avatar,name,bio,whatsapp} =classes.user;
  const {subject,cost} =classes;

  const handleLinkWhatsapp = async () => {
    await api.post('/connections', {
      user_id: id,
    })
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if(favorites){
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited){
      const favoriteIndex = favoritesArray.findIndex( (teacherItem:User) => {
        return teacherItem.id === classes.user.id;
      });
      favoritesArray.splice(favoriteIndex,1);
      setIsFavorited(false);
    } else{
      favoritesArray.push(classes);
      setIsFavorited(true);

    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

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
            color={isFavorited ? '#8257e5' : '#e33d3d'}
            onPress={handleToggleFavorite}
            img={isFavorited ? unFavoriteIcon : heartOutlineIcon }
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
