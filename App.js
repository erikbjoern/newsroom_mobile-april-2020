import React from "react";
import { StyleSheet, View } from "react-native";
import ArticleList from "./src/components/ArticleList";
import Header from "./src/components/Header";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
          <ArticleList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100
  },
});
