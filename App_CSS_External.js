import React from 'react'
import {Text,View,Button} from 'react-native'
import externalStyleSheet from './externalCss/externalStyleSheet'
const App =()=>{
  return(
    <View>
      <Text style={[externalStyleSheet.texxtBg]}>LLLLs</Text>
      <Text style={[externalStyleSheet.texxtBg,externalStyleSheet.texxtColor]}>Prssops</Text>      
    </View>
  )
}

export default App;