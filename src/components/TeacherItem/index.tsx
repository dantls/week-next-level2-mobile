import React from 'react';
import { Image } from 'react-native';
import FavoriteButton from '../FavoriteButton';
import ContactButton from '../ContactButton';


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

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <ProfileContent>
        <ProfileImage 
          source={{uri: 'http://github.com/dantls.png'}}
        />
        <ProfileInfo>
            <ProfileTextName>
              Danilo Gomes 
            </ProfileTextName>
            <ProfileTextSubject>
              Javascript
            </ProfileTextSubject>
        </ProfileInfo>
      </ProfileContent>
      <ProfileTextBio>
        Entusiasta da melhores tecnologias em Javascript.
        {'\n'}{'\n'}
        Apaixonado por explodir a mente das pessoas com muito conhecimento.
      </ProfileTextBio>
      <Footer>
        <TextPriceValue>Preço/hora {'  '} R$ 20,00</TextPriceValue>
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