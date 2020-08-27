import React from 'react';
import { TouchableOpacityProps,Image } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  img: string;
  color: string;
}


const Button: React.FC<ButtonProps> = ({children, color, img ,...rest}) => {

  return (
    <Container color={color} {...rest}>
      <Image source={img} />
      <ButtonText>
        {children}
      </ButtonText>
    </Container> 
)}

export default Button;