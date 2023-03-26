import { TextInput, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Color";

const Search = () => {
  return (
    <View style={style.screen}>
      <View style={style.root}>
        <View>
          <Text style={style.searchText}>search</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Search;

const style = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  root: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    borderWidth: 2,
    borderRadius: 400,
    borderColor: Colors.accent500,
    elevation: 3,
  },

  searchText: {
    color: Colors.accent500,
    fontSize: 23,
  },
});
