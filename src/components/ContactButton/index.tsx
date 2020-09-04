import React from 'react';
import { Image } from 'react-native';
import { Container,ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  img: string;
  color: string;
  children: string;
}


const ContactButton: React.FC<ButtonProps> = ({children,  color, img ,...rest}) => {

  return (
    <Container color={color} {...rest}>
      <Image source={img} />
      <ButtonText>
        {children}
      </ButtonText>
    </Container> 
)}

export default ContactButton;