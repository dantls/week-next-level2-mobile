import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color?: string;
  height?: string;
 
}
export const Container = styled(RectButton)<ContainerProps>`
  height: 150px;
  width: 48%;

  background: ${props => props.color ? props.color : '#04d361'};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 20px;
`;