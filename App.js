import React from "react";
import { View } from "react-native";
import ArticleList from "./src/components/ArticleList";
import Header from "./src/components/Header";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, height: 1 }}>
          <ArticleList />
      </View>
    </View>
  );
}

export default App