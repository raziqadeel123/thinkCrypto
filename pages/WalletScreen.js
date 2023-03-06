/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { View, Text } from "react-native";
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
 
  return (
    <View style={tw`px-3 mt-2`}>
      <Text style={tw`text-black font-bold mb-2`}>Total Balance</Text>
      <Text style={tw`text-gray-400 text-2xl`}>CHF 1090.20</Text>

      <View>
        <CarouselCards />
      </View>
    </View>
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default WalletScreen;
