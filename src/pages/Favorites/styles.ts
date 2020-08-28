 import styled from 'styled-components/native';
 import { Image } from 'react-native';

export const Container = styled.View`
  background-color: #8257e5;
  flex: 1;
  justify-content: center;
  padding: 40px;
`;
export const Title = styled.Text`
  font-family: Poppins_400Regular;
  color: #FFF;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;
export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;
export const ButtonsContainer = styled.View`
 flex-direction: row;
 margin-top: 40px;
 justify-content: space-between;
`;
export const TotalConnections = styled.Text`
 font-family: Poppins_400Regular;
 color: #d4c2ff;
 font-size: 12px;
 line-height: 20px;
 max-width: 140px;
 margin-top: 40px;
`;
