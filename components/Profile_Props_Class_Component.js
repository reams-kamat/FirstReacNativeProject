import React from 'react'
import {View,Text,TextInput} from 'react-native'
class Profile_Props_Class_Component extends React.Component{

	render(){
		return(			
			<View>
				<Text>Profile Class Props</Text>
				<TextInput placeholder="Enter your Name" />
				<Text>Name: {this.props.data}</Text>
				<Text>Email: {this.props.email}</Text>
			</View>
		)
	}
}
export default Profile_Props_Class_Component