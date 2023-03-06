/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { View, Text, StyleSheet, TouchableOpacity , Alert } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import CarouselCards from "../Components/CarouselCards";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const WalletScreen = ({ Navigation }) => {


  // Buy and Sell alert function

  const BuyAlert = () =>
  Alert.alert(
    'Buy Alert',
    'Do your want to buy this Coin',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Transition denied'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => Alert.alert('Congrate!')},
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );



  const SellAlert = () =>
  Alert.alert(
    'Sell Alert',
    'Do your want to Sell this Coin',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Transition denied'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => Alert.alert('Congrate!')},
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },

  )

  return (
    <View style={tw`px-3 mt-2`}>
      <Text style={tw`text-black font-bold mb-2`}>Total Balance</Text>
      <Text style={tw`text-gray-400 text-2xl`}>CHF 9999.99</Text>

      <View>
        <CarouselCards />
      </View>
      <View style={tw`flex justify-center	self-center flex-row`}>
        <TouchableOpacity
          onPress={BuyAlert}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={SellAlert}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>
            Sell
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    marginTop: 50,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imagestyle: {
    marginVertical: 10,
    flex: 1,
    width: 250,
  },
  appButtonContainer: {
    marginTop: 50,
    marginHorizontal: 50,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#3d46d7"
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

export default WalletScreen;
