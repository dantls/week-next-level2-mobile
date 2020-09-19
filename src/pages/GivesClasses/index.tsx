import React from 'react';

import { ImageBackground } from 'react-native';


import { Container , Title, Description , Button,ButtonText} from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';


const GiveClasses:React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  }

  return(
    <Container>

      <ImageBackground
        source={giveClassesBgImage}
        style={{
          flex:1,
          justifyContent: 'center'
        }}
        resizeMode="contain"
      >
        <Title>Quer ser um Proffy?</Title>
        <Description>Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </ImageBackground>

      <Button onPress={handleNavigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </Button>
    </Container>
  )
}

export default GiveClasses;
