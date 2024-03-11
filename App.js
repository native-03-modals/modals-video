import React, { useState } from 'react';
import { Button, Modal, ScrollView, Text, View, SafeAreaView, StatusBar,StyleSheet } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Modals Example</Text>
          <Button title="Open Modal" onPress={() => setModalVisible(true)} />
        </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </ScrollView>
        </SafeAreaView>
      </Modal>
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255,0,0,0.5)'
  },
  text: {
    fontSize: 36,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 96,
    textAlign: 'center',
  },
  scrollview:{
    flex:1,
    height:10
  }
});

export default App;
