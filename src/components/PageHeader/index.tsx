import React from 'react';
import {Image} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Container,TopBar } from './styles';


function handleGoBack(){

}

const PageHeader: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon}/>
        </BorderlessButton>
        <Image source={logoImg}/>
      </TopBar>
      {/* <Title>
        Proffys disponíveis
      </Title> */}
    </Container>
  );
}
export default PageHeader;