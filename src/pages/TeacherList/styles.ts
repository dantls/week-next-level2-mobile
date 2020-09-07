 import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';


export const Container = styled.View`
  background-color: #8257e5;
  padding: 40px;
`;


export const SearchForm = styled.View`
  margin-bottom: 24px;
`;
export const LabelText = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;

`;
export const InputText = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
 
`;
export const SearchDataGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const InputBlock = styled.View`
  width: 48%;
`;

export const ScroolView = styled(ScrollView)`
  margin-top: -45px;
`;