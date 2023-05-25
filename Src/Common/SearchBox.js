import React from 'react';
import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBox = props => {
  const handleChangeValue = value => {
    props.setSearchValue(value);
  };
  return (
    <View
      style={{
        padding: 5,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      
      <TextInput
        placeholder="Search"
        placeholderTextColor="black"
        style={{
          marginHorizontal: 20,
          fontSize: 14,
          flex: 1,
          marginTop: 1,
          color:'black',
          
        }}
        onChangeText={handleChangeValue}
        value={props.search}
        returnKeyType={'Search'}
      />
      <Feather
        name="search"
        style={{
          fontSize: 30,
          alignSelf: 'center',
          color:'black'
        }}
      />
    </View>
  );
};

export default SearchBox;
