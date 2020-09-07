import React, { useState } from 'react';
import { Container,ScroolView, SearchForm,SearchDataGroup,InputBlock,LabelText,InputText } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";


const TeacherList:React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return(
    <>
      <Container>
        <PageHeader
          title="Proffys disponíveis" 
          headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather 
                name="filter" 
                size={20} 
                color="#fff"
              />
            </BorderlessButton>
          )}
        >
          {isFiltersVisible && (<SearchForm>
              <LabelText>Matéria</LabelText>
              <InputText
                placeholderTextColor="#c1bcc0"
                placeholder="Qual é a matéria?"
              />
              <SearchDataGroup>
                <InputBlock>
                  <LabelText>Dia da semana</LabelText>
                  <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual o dia?"
                  />
                </InputBlock>

                <InputBlock>
                  <LabelText>Horário</LabelText>
                  <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual é o horário?"
                  />
                </InputBlock>
              </SearchDataGroup>

            </SearchForm>
        )}
        </PageHeader> 
      </Container>
      <ScroolView
        contentContainerStyle={{
          paddingHorizontal: 14,
          paddingBottom: 14,
        }} 
      >
        <TeacherItem />
        <TeacherItem />
      </ScroolView>
    </>
  )
}

export default TeacherList;
