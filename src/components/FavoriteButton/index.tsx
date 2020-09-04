import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  img: string;
  color: string;
}


const FavoriteButton: React.FC<ButtonProps> = ({ color, img ,...rest}) => {

  return (
    <Container color={color} {...rest}>
      <Image source={img} />
    </Container> 
)}

export default FavoriteButton;