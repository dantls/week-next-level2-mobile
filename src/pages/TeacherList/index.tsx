import React, {  useState } from 'react';

import {
  Container,
  ScroolView,
  SearchForm,
  SearchDataGroup,
  InputBlock,
  LabelText,
  InputText,

} from './styles';
import FilterButton from '../../components/FilterButton';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Classes ,User} from '../../components/TeacherItem';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import api from '../../services/api';
import { useFavorites } from '../../contexts/favorites';


const TeacherList:React.FC = () => {

  const { favorites , loadFavorites} = useFavorites();

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  }

  const handleFiltersSubmit = async () => {
    await loadFavorites();
    const response = await api.get('/classes',{
      params:{
        subject,
        week_day,
        time
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
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
                value={subject}
                onChangeText={text => setSubject(text)}
              />
              <SearchDataGroup>
                <InputBlock>
                  <LabelText>Dia da semana</LabelText>
                  <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual o dia?"
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                  />
                </InputBlock>

                <InputBlock>
                  <LabelText>Horário</LabelText>
                  <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual é o horário?"
                    value={time}
                    onChangeText={text => setTime(text)}
                  />
                </InputBlock>


              </SearchDataGroup>

              <FilterButton
                onPress={handleFiltersSubmit}
                icon={(<Feather
                  name="search"
                  size={20}
                  color="#fff"
                />)}
              >
                Filtrar

              </FilterButton>
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
        {teachers.map((item:Classes) => {

          return(
            <TeacherItem
              favorited={!!favorites.find(favorite =>
                favorite.classes.user.id === item.user.id && favorite.favorited
              )}
              key={item.id}
              classes={item}
            />
          )
        })}
      </ScroolView>
    </>
  )
}

export default TeacherList;
