import React from 'react';

import { Image } from 'react-native';


import { Container,Title, TitleBold, ButtonsContainer } from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png';
import Button from '../components/Button';

const Landing:React.FC = () => {
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
        <Button img={studyIcon} color={'#04d361'}>
          Dar aulas
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default Landing;
