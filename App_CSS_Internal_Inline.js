import React from 'react'
import {Text,View,Button,StyleSheet} from 'react-native'

const App =()=>{
  return(
    <View>
      <Text style={{fontSize:70}}>Props</Text>
      <Text style={[styles.textColor,styles.textBackground]}>Props</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textColor:{
    color:'green',
    fontSize:70
  },
  textBackground:{
    backgroundColor:'yellow'
  }
})
export default App;