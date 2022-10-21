import React from 'react'
import {Text,View} from 'react-native'
import Profile_Class_Component from './components/Profile_Class_Component'

class App extends React.Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:50}}>Hello World</Text>
        <ProfileClass/>
        <Profile_Class_Component/>
      </View>
    )
  }
}
class ProfileClass extends React.Component{
  render(){
    return(
      <View>
        <Text style={{fontSize:50}}>Profile Component</Text>
      </View>
    )
  }
}
export default App;