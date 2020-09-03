 import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #FFF;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden
`;

export const ProfileContent = styled.View`
 flex-direction: row;
 align-items: center;
 padding: 24px;
`;

export const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
 margin-left: 16px;
`;

export const ProfileTextName = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 22px;
`;

export const ProfileTextSubject = styled.Text`
 font-family: Poppins_400Regular;
 color: #6a6180;
 font-size: 16px;
 margin-top: 4px;
`;

export const ProfileTextBio = styled.Text`
  margin: 0 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 26px;
  color: #6a6180;
`;

export const Footer = styled.View`
 background-color: #fafafc;
 padding: 24px;
 align-items: center;
`;
export const TextPrice = styled.Text`
 font-family: Poppins_400Regular;
 color: #6a6180;
 font-size: 14px;
`;
export const TextPriceValue = styled.Text`
 font-family: Archivo_700Bold;
 color: #8257e5;
 font-size:16px;
`;

export const ButtonsContainer = styled.View`
 flex-direction: row;
 margin-top: 16px;
`;
export const ButtonContact = styled(RectButton)`
 background-color: #8257e5;
 
`;
export const ButtonFavorite = styled(RectButton)``;
