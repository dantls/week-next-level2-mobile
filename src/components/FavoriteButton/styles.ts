import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: string;
 
}
export const Container = styled(RectButton)<ContainerProps>`
  height: 56px;
  width: 56px;

  background: ${props => props.color};
  border-radius: 8px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
