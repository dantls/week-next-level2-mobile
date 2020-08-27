import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
 
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 150px;
  width: 48%;

  background: ${props => props.color};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 20px;
`;