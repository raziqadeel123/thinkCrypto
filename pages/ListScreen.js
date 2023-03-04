   
/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { StyleSheet, Text, View , FlatList, RefreshControl } from 'react-native'
import React , {useState, useEffect} from 'react'
import { SoundFilled } from '@ant-design/icons';
import Coin from '../Components/Coin';
import { getMarketData } from '../Services/Api';

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

function ListScreen({Navigation}) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const coinData = await getMarketData();
    setData(coinData);
    setLoading(false);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Coin marketCoin={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getData}
            tintColor="Black"
          />
        }
      />
    </View>
  )
}




const styles = StyleSheet.create({})




/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/


export default ListScreen;