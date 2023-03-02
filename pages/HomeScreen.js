/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView
  } from 'react-native';
import * as React from 'react'


/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/


const HomeScreen = ({Navigation}) => {
  return (
   
    <SafeAreaView style={{ flex: 1 }}>
      
       <Text>
        Your are in Homepage
       </Text>
          
    </SafeAreaView>
  )
}


/*-------------------------------------------------------------*/
/*STYLES*/
/*-------------------------------------------------------------*/


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 300,
      marginTop: 16,
    },
  });

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default HomeScreen