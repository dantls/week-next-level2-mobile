import React from 'react';
import { Image } from 'react-native';


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
  TextPrice,
  TextPriceValue,
  Footer,
  ButtonContact,
  ButtonsContainer,
  ButtonFavorite
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
        <TextPrice>
          Preço/hora {'  '}
          <TextPriceValue>R$ 20,00</TextPriceValue>
        </TextPrice>
        <ButtonsContainer>
          <ButtonFavorite>
            <Image source={heartOutlineIcon}/>
          </ButtonFavorite>
          <ButtonContact>
            <Image source={whatsappIcon}/>
            Entrar em contato
          </ButtonContact>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}
export default TeacherItem;