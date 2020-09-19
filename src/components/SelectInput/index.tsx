import { Picker } from '@react-native-community/picker';
import React,{useState} from 'react';
import styles from './styles';

interface PropsNames {
  label: string|number;
  value: string;
}


interface Props {
  values: PropsNames[];
  name:string;
}

const SelectInput = ({name, values }:Props) => {

  const [language,setLanguage] = useState('');
  return (
    <Picker
      selectedValue={language}
      style={styles.container}
      onValueChange={(itemValue: React.ReactText, itemIndex) =>
        setLanguage( String(itemValue) )
      }>
      {values.map((item,index) => (
        <Picker.Item key={index + item.value}label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default SelectInput;
