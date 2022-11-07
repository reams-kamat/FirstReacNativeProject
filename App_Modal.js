import React from 'react'
import {Text,View,Button,Modal} from 'react-native'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render(){
    return(
      <View style={{flex:1,marginTop:50}}>
            <Text style={{fontSize:50}}>Normal Screen Text</Text> 
            <Button title="Show Modal" onPress={()=>{this.setState({show:true})}} />

            <Modal
            transparent={true}
            visible={this.state.show}
            >
              <View style={{backgroundColor:"#000000aa",flex:1}}>
                <View style={{backgroundColor:"#ffffff",flex:1,margin:50,padding:40,borderRadius:10}}>
                  <Text style={{fontSize:50}}>Modal Text</Text>
                  <Button title="Hide Modal" onPress={()=>{this.setState({show:false})}} />

                </View>
              </View>

            </Modal>     
      </View>
    )
  }
}

export default App;