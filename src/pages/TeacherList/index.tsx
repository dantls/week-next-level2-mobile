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
import SelectInput from '../../components/SelectInput';


const TeacherList:React.FC = () => {

  const { favorites , loadFavorites} = useFavorites();

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const subjects =[
    {value:"História" , label:"História"},
    {value:"Artes"     , label:"Artes"},
    {value:"Geografia" , label:"Geografia"},

  ];
  const days = [
    {value:"0" , label:"Domingo"},
    {value:"1" , label:"Segunda-Feira"},
    {value:"2" , label:"Terça-Feira"},
    {value:"3" , label:"Quarta-Feira"},
    {value:"4" , label:"Quinta-Feira"},
    {value:"5" , label:"Sexta-Feira"},
    {value:"6" , label:"Sábado"},
  ];
  const hours = [
    {value:"08:00" , label:"08:00"},
    {value:"09:00" , label:"09:00"},
    {value:"10:00" , label:"10:00"},
    {value:"11:00" , label:"11:00"},
    {value:"12:00" , label:"12:00"},
    {value:"13:00" , label:"13:00"},
    {value:"14:00" , label:"14:00"},
    {value:"15:00" , label:"15:00"},
    {value:"16:00" , label:"16:00"},
    {value:"17:00" , label:"17:00"},
    {value:"18:00" , label:"18:00"}
  ];


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
              <SelectInput name='subject'values={subjects} />

              {/*
              <InputText
                placeholderTextColor="#c1bcc0"
                placeholder="Qual é a matéria?"
                value={subject}
                onChangeText={text => setSubject(text)}
              /> */}
              <SearchDataGroup>
                <InputBlock>
                  <LabelText>Dia da semana</LabelText>
                  <SelectInput  name='day' values={days} />
                  {/* <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual o dia?"
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                  /> */}
                </InputBlock>

                <InputBlock>
                  <LabelText>Horário</LabelText>
                  <SelectInput  name='hours' values={hours} />
                  {/* <InputText
                    placeholderTextColor="#c1bcc0"
                    placeholder="Qual é o horário?"
                    value={time}
                    onChangeText={text => setTime(text)}
                  /> */}
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
