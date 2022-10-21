import React,{useState} from 'react'
import {Text,View,Button} from 'react-native'

const App =()=>{
  const [dataa,setDatas] =useState(5)
  return(
    <View>
      <Button onPress={()=>setDatas(dataa-1)} title="Decrement" />
      <Text style={{fontSize:70}}>{dataa}</Text>
      <Button onPress={()=>setDatas(dataa+1)} title="Increment" />
    </View>
  )
}
export default App;