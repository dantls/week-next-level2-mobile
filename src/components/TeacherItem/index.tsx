import React from 'react';
import FavoriteButton from '../FavoriteButton';
import ContactButton from '../ContactButton';

interface User{
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
interface TeacherItemProps{
  classes:Classes;
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

const TeacherItem: React.FC<TeacherItemProps> = ({classes}) => {
  const {id, avatar,name,bio,whatsapp} =classes.user;
  const {subject,cost} =classes;

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
            img={heartOutlineIcon}
          />
          <ContactButton
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
