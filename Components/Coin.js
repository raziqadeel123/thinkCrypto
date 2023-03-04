/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { Image, Pressable, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import millify from "millify";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const Coin = ({ marketCoin }) => {
  const {
    image,
    name,
    market_cap_rank,
    symbol,
    price_change_percentage_24h,
    current_price,
    market_cap,
    id,
  } = marketCoin;

  const handleIconColor =
    price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const navigation = useNavigation();

  millify(market_cap, {
    precision: 2,
    units: ["B", "KB", "MB", "GB", "TB"],
    space: true,
  });

  return (
    <Pressable
      style={tw`flex flex-row p-3 border-b-2 border-gray-800`}
      onPress={() => navigation.navigate("CoinDetails", { coinId: id })}
    >
      <Image
        style={tw`h-10 w-10 mr-4 self-center`}
        source={{
          uri: image,
        }}
      />
      <View> 
        <Text style={tw`text-black font-bold mb-2`}>{name}</Text>
        <View style={tw`flex flex-row`}>
          <View style={tw`bg-blue-100 px-1 rounded mr-2`}>
            <Text style={tw`text-black font-bold`}>{market_cap_rank}</Text>
          </View>
          <Text style={tw`mr-2 text-black`}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={handleIcon}
            size={14}
            color={handleIconColor}
            style={tw`self-center mr-2`}
          />
          <Text style={tw.style(`mr-2`, { color: handleIconColor })}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={tw`ml-auto items-end`}>
        <Text style={tw`text-black mb-2`}>{millify(current_price)}</Text>
        <Text style={tw`text-black`}>MCap {millify(market_cap)}</Text>
      </View>
    </Pressable>
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default Coin;
