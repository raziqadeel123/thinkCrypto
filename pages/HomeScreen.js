/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";
import { useNavigation} from "@react-navigation/native";
import Lottie from "lottie-react-native"

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/


/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const HomeScreen = ({ Navigation }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       {/*<Image style={styles.imagestyle} source={require("../assets/Images/HomeScreenImage.png")} />*/} 
       <Lottie 
        style={styles.imagestyle}
        source={require("../assets/lottie/crypto-phone.json")}
        autoPlay
        loop
       />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("cryptos")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Get Started!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

/*-------------------------------------------------------------*/
/*STYLES*/
/*-------------------------------------------------------------*/

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container : {
      marginTop: 50,
      height : 300,
      display : "flex",
      justifyContent: "center",
      alignItems : "center"
  },
  imagestyle: {
    marginVertical : 10 ,
    flex: 1,
    width: 250,
  },
  appButtonContainer: {
    marginTop:50,
    marginHorizontal : 50,
    elevation: 8,
    backgroundColor: "#3d46d7",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default HomeScreen;
