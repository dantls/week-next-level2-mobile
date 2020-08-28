 import styled from 'styled-components/native';
 import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;
export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #FFF;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;
export const Description = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  margin-top: 24px;
  max-width: 240px;
`;
export const Button = styled(RectButton)`
  margin-bottom: 40px;
  width: 100%;
  height: 58px;
  background-color: #04d361;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const ButtonText = styled.Text`
  color:#FFF;
  font-size: 16px;
  font-family: Archivo_700Bold

`;

