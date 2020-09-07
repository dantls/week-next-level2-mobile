import React, { useState, useEffect } from 'react';

import { Image, AsyncStorage } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container,Title, TitleBold, ButtonsContainer, TotalConnections } from './styles';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import Button from '../../components/Button';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';


const Landing:React.FC = () => {
  const {navigate} = useNavigation();

  const [totalConnections , setTotalConnections] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.get('/connections');
      const {total} = response.data;
      setTotalConnections(total);
    }
    loadData();
  },[]);


  const handleNavigateToGiveClassesPage = async() =>{
    await AsyncStorage.removeItem('favorites');
    navigate('GiveClasses');
  }

  const handleNavigateToStudyPages = async() =>{
    await AsyncStorage.removeItem('favorites');
    navigate('Study');
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
        <Button
          img={studyIcon}
          color={'#9871f5'}
          onPress={handleNavigateToStudyPages}
        >
          Estudar
        </Button>
        <Button
          onPress={handleNavigateToGiveClassesPage}
          img={giveClasses}
          color={'#04d361'}
        >
          Dar aulas
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon}/>
      </TotalConnections>
    </Container>
  )
}

export default Landing;
