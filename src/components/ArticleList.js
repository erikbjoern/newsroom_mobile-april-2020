import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import { FlatList, View } from "react-native";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  const fetchArticleList = async () => {
    try {
      const response = await axios.get("/articles");
      setArticleList(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticleList();
  }, []);

  let articleCards = articleList.map((article) => {
    return <ArticleCard article={article} />;
  });

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={
        [
          ...articleCards, 
          <Footer />
        ]
      }
      renderItem={({ item }) => <View>{item}</View>}
    />
  );
};

export default ArticleList;
