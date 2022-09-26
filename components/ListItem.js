import { StyleSheet, View, Text, Button } from 'react-native'


function ListItem (props) {
  return (

    <View style={styles.listItem}>
      <Text style={styles.itemText}>{props.text}</Text>
      <Button
        title='X'
        onPress={props.onDeleteItem.bind(this, props.id)}
        color="black"
      />
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({

  listItem: {
    margin: 8,
    borderRadius: 6,
    borderColor: "#B39F71",
    borderWidth: 2,
    flexDirection: "row",
    paddingVertical: 10
  },

  itemText: {
    textAlign: "center",
    fontSize: 30,
    flex: 1,
    paddingLeft: 20
  },

})