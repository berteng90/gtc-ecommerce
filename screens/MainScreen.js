import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Banner from "../components/UI/Banner";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "₱19.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
  {
    id: 2,
    name: "Product 2",
    price: "₱29.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
  {
    id: 3,
    name: "Product 3",
    price: "₱39.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
  {
    id: 4,
    name: "Product 4",
    price: "₱49.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
  {
    id: 5,
    name: "Product 5",
    price: "₱49.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
  {
    id: 6,
    name: "Product 6",
    price: "₱49.99",
    image: require("../assets/images/sample-image.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dui eleifend, viverra turpis quis, vestibulum risus. Duis ac pharetra magna. Nullam eget ipsum vitae libero consequat ullamcorper eget sit amet nisi.",
  },
];

const Product = ({ product, handleProductPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleProductPress(product)}
      style={styles.product}
      activeOpacity={0.7}
    >
      <Image style={styles.image} source={product.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MainScreen({ navigation }) {
  const handleProductPress = (currProduct) => {
    navigation.navigate("Product Screen", { product: currProduct });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/goodfarms-logo.png")}
        />
        <TextInput
          style={styles.search}
          placeholder="Search products"
          placeholderTextColor="#888"
        />
      </View>
      <View>
        <Banner title={"Get Discounts up to 10% on All Items!"} />
      </View>
      <ScrollView>
        <View style={styles.productList}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleProductPress={handleProductPress}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.tab}>
          <Ionicons name="home" size={24} color="#888" />
          <Text style={styles.tabText}>Home</Text>
        </View>
        <View style={styles.tab}>
          <Ionicons name="cart" size={24} color="#888" />
          <Text style={styles.tabText}>Cart</Text>
        </View>
        <View style={styles.tab}>
          <Ionicons name="person" size={24} color="#888" />
          <Text style={styles.tabText}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#bef264",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
    justifyContent: "center",
  },
  product: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    width: 170,
    height: 200,
    marginHorizontal: 5,
  },
  image: {
    height: 80,
    marginBottom: 10,
    width: 80,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 14,

    textAlign: "center",
  },
  button: {
    backgroundColor: "#bef264",
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#fff",
    borderTopColor: "#888",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 10,
    color: "#888",
  },
});
