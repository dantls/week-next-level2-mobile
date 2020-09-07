import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color?: string;
}
export const Container = styled(RectButton)<ContainerProps>`
  height: 56px;
  background: ${props => props.color ? props.color : '#04d361'};
  border-radius: 8px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-right: 10px;
`;