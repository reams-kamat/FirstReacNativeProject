import React from 'react'
import {Text,View,Button,TextInput} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App =()=>{
  return(
    <View>
      <FontAwesome5 name={'comments'} size={100} color="red" />
      <FontAwesome5 name={'facebook'} size={100} color="blue" />
      <Text style={{fontSize:55, borderColor:'skyblue'}}>Icons</Text>
      <FontAwesome5 name={'google'} size={100} color="red" />
      
    </View>
  )
}

export default App;