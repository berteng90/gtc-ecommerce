import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../context/CartContext";

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart, removeCartItem, cartItems } = useContext(CartContext);
  const isItemInCart = cartItems.some((item) => item.id === product.id);

  return (
    <LinearGradient colors={["#f8fafc", "#bef264"]} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <TouchableOpacity
              style={[
                styles.cartButton,
                isItemInCart ? styles.cartButtonAdded : null,
              ]}
              onPress={() => {
                if (!isItemInCart) {
                  addToCart(product);
                } else {
                  removeCartItem(product);
                }
              }}
            >
              <Text style={styles.cartButtonText}>
                {isItemInCart ? "In Cart" : "Add to Cart"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartButton: {
    backgroundColor: "#f0c14b",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cartButtonAdded: {
    backgroundColor: "#f0c14b",
    opacity: 0.8,
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ProductScreen;
