/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from "react-native";

import * as SMS from "expo-sms";
import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";
import tw from "tailwind-react-native-classnames";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

function SMSModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [recipients, setRecipients] = useState([]);
  const [amount, setamount] = useState(undefined);
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    async function checkAvailability() {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    }
    checkAvailability();
  }, []);

  const sendSms = async () => {
    const { uri } = await Print.printToFileAsync({
      html: "<h1>Hi friends</h1>",
    });

    console.log(uri);

    const contentUri = await FileSystem.getContentUriAsync(uri);
    console.log(contentUri);

    const { result } = await SMS.sendSMSAsync(recipients, `Hey There  ! `+ "\n" + ` you have bought coin in value of  "` + amount + " CHF" , );

    console.log(result);
  };

  const addNumber = () => {
    let newRecipients = [...recipients];
    newRecipients.push(phoneNumber);
    setRecipients(newRecipients);
    setPhoneNumber(undefined);
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text>No recipients added!</Text>;
    }

    return recipients.map((recipient, index) => {
      return <Text key={index}>{recipient}</Text>;
    });
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello There!</Text>
            <View style={styles.container}>
              <TextInput
                 keyboardType="numeric"
                style={styles.numInput}
                value={phoneNumber}
                placeholder="Phone Number"
                onChangeText={(value) => setPhoneNumber(value)}
              />
              <Button title="Add Number" onPress={addNumber} />
              <Text>Amount</Text>
              <TextInput
                keyboardType="numeric"
                maxLength={5}
                style={styles.msgInput}
                value={amount}
                placeholder="00.00"
                onChangeText={(value) => setamount(value)}
              />
              <Text>Recipients:</Text>
              {showRecipients()}
              <View style={tw`mt-2`}>
              <Button
                title="Clear Recipients"
                onPress={() => setRecipients([])}
              />
                </View>
                <View style={tw`mt-2`}>

              
              {isAvailable ? (
                <Button style={tw`mt-4`} title="Send SMS" onPress={sendSms} />
             
              )  : (
                <Text>SMS not available</Text>
              )}
                 </View>
              
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Buy</Text>
      </Pressable>
    </View>
  );
}

/*-------------------------------------------------------------*/
/*Styles*/
/*-------------------------------------------------------------*/

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop : 4,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3d46d7",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  numInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 2,
  },
  msgInput: {
    marginTop: 4,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 2,
  },
});

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default SMSModal;
