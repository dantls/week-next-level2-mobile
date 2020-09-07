import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: string;
 
}
export const Container = styled(RectButton)<ContainerProps>`
  height: 56px;
  flex: 1;
  background: ${props => props.color};
  border-radius: 8px;
  padding: 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 18px;
  margin-left: 10px;
`;