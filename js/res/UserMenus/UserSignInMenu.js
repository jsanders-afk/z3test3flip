'use strict';
import React, { useState } from 'react'
import { 
  AppRegistry,
  Text,
  Image,
  ImageBackground,
  View,
  TextInput,
  StatusBar,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

  const UserSignInMenu = (props) => {
  const boardImage = {uri: "https://pngimg.com/uploads/skateboard/skateboard_PNG11748.png"}
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login_USER_(username, password, stance)

  }
 
  return (
    <ImageBackground source={boardImage} style={localStyles.backImage} imageStyle={{ opacity: 0.7 }}>
      <View style={localStyles.topMenu}>
          <TouchableOpacity 
            style={localStyles.flex}
            activeOpacity={.5} 
            onPress={() => props._back_toMainMenu()}
         >
          <Image 
            style={localStyles.topMenu}
            source={require('../archive/icon_left_w.png')}        
          />
          </TouchableOpacity>
      </View>
    <View style={localStyles.inner}>
      <View style={localStyles.formBox}>
        <TextInput style={localStyles.textInput} placeholder="Username" onChange={event => setUsername(event.target.value)}/>
      </View>
      <View style={localStyles.formBox}>
        <TextInput style={localStyles.textInput} placeholder="Password" onChange={event => setPassword(event.target.value)}/>
      </View>
        <TouchableHighlight style={localStyles.buttons}
        onPress={() => props._userSignedIn()}
        underlayColor={'#68a0ff'} >
        <Text style={localStyles.buttonText}>
        sign in 
        </Text>
      </TouchableHighlight>
        </View>
       </ImageBackground> 
  );
}
 
  const localStyles = StyleSheet.create({
    flex : {
      flex : 1,
    },
    viroContainer : {
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
    },
    formBox: {
      flexDirection: 'row',
      alignItems:'center',
    },
    titleText: {
      paddingTop: 30,
      paddingBottom: 20,
      color:'#fff',
      textAlign:'center',
      fontSize : 25
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 20
    },
    buttons : {
      height: 80,
      width: 150,
      paddingTop:20,
      paddingBottom:20,
      marginTop: 10,
      alignSelf: 'center',
      marginBottom: 10,
      backgroundColor:'hsla(205, 83%, 16%, 0.67)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    topMenu: {
      height : '30%',
      width : '40%',
      marginTop: 10,
      top : 0,
    },
    textInput: {
      flex: 1,
      color: '#fff',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 15,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    backImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      backgroundColor: 'hsla(205, 83%, 16%, 0.87)'
    },
  });
export default UserSignInMenu;
