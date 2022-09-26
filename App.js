
import { StyleSheet, View, FlatList, Button, Text } from 'react-native'
import { useState } from 'react'
import ListItem from './components/ListItem'
import ItemInput from './components/ItemInput'
import { StatusBar } from 'expo-status-bar'

export default function App () {

  const [listItems, setListItems] = useState([])
  const [modalIsVistible, setModalIsVisible] = useState(false)
  function startAddItemHandler () {
    setModalIsVisible(true)
  }

  function endAddItemHandler () {
    setModalIsVisible(false)
  }

  function addItemHandeler (enteredItemText) {
    setListItems(currentListItems => [
      ...currentListItems,
      { text: enteredItemText, id: Math.random().toString() },
    ])
    endAddItemHandler()
  };


  function deleteItemHandeler (id) {
    setListItems(currentListItems => {
      return currentListItems.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MY LIST</Text>
      </View>
      <View style={styles.appContainer}>
        <Button title='Add Item'
          color="#B39F71"
          onPress={startAddItemHandler} />
        <ItemInput
          visible={modalIsVistible}
          onAddItem={addItemHandeler}
          onCancel={endAddItemHandler} />
        <View style={styles.itemsContainer}>

          <FlatList data={listItems}
            renderItem={(itemData) => {

              return <ListItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteItemHandeler} />
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false}>
          </FlatList>

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: "#fbfbfb",
    borderBottomWidth: 1,
    backgroundColor: "#f7f8f8"


  },
  titleContainer: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomColor: "#fbfbfb",
    borderBottomWidth: 3

  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "grey"

  },


  itemsContainer: {
    flex: 5,
  },



})
