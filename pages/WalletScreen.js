/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";


/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const WalletScreen = ({ Navigation }) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={tw`px-3 mt-2`}>
      <Text style={tw`text-black font-bold mb-2`}>Total Balance</Text>
      <Text style={tw`text-gray-400 text-2xl`}>CHF 1090.20</Text>

    

      </View>
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default WalletScreen;
