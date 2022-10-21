import React from 'react'
import {View,Text} from 'react-native'

const Profile =(propsData)=>{
	return(
		<View>
			<Text style={{fontSize:70}}>Profile Component Fn</Text>
			<Text style={{fontSize:30}}>Email : {propsData.email}</Text>		
			<Text style={{fontSize:30}}>Name : {propsData.data}</Text>
		</View>
	)
}
export default Profile;