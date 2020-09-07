import React,{ReactNode} from 'react';
import { Container, ButtonText } from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
  color?: string;
  icon?: ReactNode;
}


const FilterButton: React.FC<ButtonProps> = ({children, color ,icon,...rest}) => {

  return (
    <Container color={color} {...rest}>
     
      <ButtonText>
        {children}
      </ButtonText>
      {icon}
    </Container> 
)}

export default FilterButton;