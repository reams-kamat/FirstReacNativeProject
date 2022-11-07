import React from 'react'
import {Text,View,Button,TextInput} from 'react-native'
const App =()=>{
  const submit =(name)=>{
    console.log(name)
    console.warn(name+'ggg')
    console.log(name)
  };
  return(
    <View>
      <TextInput placeholder="Enter the Name" maxLength={5} 
      style={{margin:15, borderColor:'skyblue', borderWidth:2}} />
      <TextInput placeholder="Enter the Address" maxLength={5} 
      style={{margin:15, borderColor:'skyblue', borderWidth:2}} />
      <Button title="Send" onPress={()=>{submit('Random test')}}/>
    </View>
  )
}

export default App;