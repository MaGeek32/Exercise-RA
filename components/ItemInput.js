import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import { useState } from 'react'

function ItemInput (props) {
  const [enteredItemText, setEnteredItemText] = useState('')
  function itemInputHandler (enteredText) {
    setEnteredItemText(enteredText)
  };

  function addItemHandeler () {
    props.onAddItem(enteredItemText)
    setEnteredItemText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a list item"
          onChangeText={itemInputHandler}
          value={enteredItemText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Item" onPress={addItemHandeler} color="#B39F71" />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} ></Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ItemInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'

  },



  textInput: {
    borderWidth: 1,
    borderColor: '#B39F71',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },

  buttonContainer: {
    flexDirection: "row"
  },

  button: {
    width: "40%",
    marginHorizontal: 8,
    padding: 16
  }
})