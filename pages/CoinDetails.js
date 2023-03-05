import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import millify from "millify";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { getCoin, getMarketChart } from "../Services/Api";

export default function CoinDetails() {
  const navigation = useNavigation();
  const [data, setData] = useState("bitcoin");
  const [loading, setLoading] = useState(false);
  const [chartData, setChatData] = useState("");

  const route = useRoute();
  const id = route.params?.coinId;

  const getCoinInfo = async () => {
    setLoading(true);
    const getCoinData = await getCoin(id);
    const getCoinChart = await getMarketChart(id);
    setData(getCoinData);
    setChatData(getCoinChart);
    setLoading(false);
  };

  useEffect(() => {
    getCoinInfo();
  }, []);

  if (loading || !data) {
    return <ActivityIndicator size="small" style={tw`mt-24`} />;
  }

  const { name, symbol } = data;
  const { prices } = chartData;

  //const price = chartData.prices
  // console.log(price)

  return (
    <View style={tw`px-3`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={tw`flex flex-row items-center`}>
        <Text style={tw`text-black text-base`}>{name}</Text>
        <Text style={tw`text-black text-base font-bold mx-2`}>{symbol}</Text>
      </View>

      <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              smoothingStrategy: "bezier",
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      ></LineChart>

      <TouchableOpacity
        onPress={() => navigation.navigate("wallet", { coinId: id })}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Add to Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  appButtonContainer: {
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
