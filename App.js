import React from 'react'
import {Text,View,Button} from 'react-native'
import Profile_Props_Function_Component from './components/Profile_Props_Function_Component'
import PropsProfile from './components/Profile_Props_Class_Component'

const App =()=>{
  return(
    <View>
      <Text style={{fontSize:70}}>Props</Text>
      <PropsProfile data={"Reams"} email="reams.kamat@gmail.com"/>
    </View>
  )
}
export default App;