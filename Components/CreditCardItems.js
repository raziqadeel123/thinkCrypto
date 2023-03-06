


/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import { View, Text, StyleSheet, Image, Dimensions } from "react-native"


/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/



export const SLIDER_WIDTH = Dimensions.get('window').width ;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)


/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const CreditCardItems = ({ item, index })=> {

  
    return (
        <View style={styles.container} key={index}>


          <Image style={styles.image}  source={{uri: item.imgUrl}}/>
        {/*
        <Image
          source={{ uri: item.imgUrl }}r
          style={styles.image}
        />
    */ }  
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.FullName}</Text>
      </View>
    )
  }



  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      display : "flex",
      justifyContent: "center",
      alignItems : "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
    paddingBottom : 10,
    paddingTop: 10,
    marginTop : 10,
    marginRight: 10,
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      marginHorizontal : 2,
    },
    image: {
      marginVertical : 5,
      width: 320,
      height:180,
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }
  })




/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default CreditCardItems;