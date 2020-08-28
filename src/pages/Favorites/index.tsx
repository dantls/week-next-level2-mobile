import React from 'react';

import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import { Container,Title, TitleBold, ButtonsContainer, TotalConnections } from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png';
import Button from '../../components/Button';
import heartIcon from '../../assets/images/icons/heart.png';


const Landing:React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigateToGiveClassesPage = () =>{
    navigate('GiveClasses');
  } 
  return(
    <Container>

      <Image 
        style={{
            width:'100%',
            resizeMode:'contain'
        }}
        source={landingImg}
      />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>
          O que deseja fazer?
        </TitleBold>
      </Title>
      
      <ButtonsContainer>
        <Button img={studyIcon} color={'#9871f5'}>
          Estudar
        </Button>
        <Button onPress={handleNavigateToGiveClassesPage} img={studyIcon} color={'#04d361'}>
          Dar aulas
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total 2 conexões já realizadas {' '}
        <Image source={heartIcon}/>
      </TotalConnections>
    </Container>
  )
}

export default Landing;
