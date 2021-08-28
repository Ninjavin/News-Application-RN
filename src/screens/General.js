import React, { useEffect, useState } from "react";
import { Alert, View, ActivityIndicator, Dimensions } from "react-native";
import { Container, ScrollView, List, Text, VStack } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import DataItem from "../component/DataItem";
import ModalC from "../component/ModalC";
import newsService from "../service/News";
import { updateGeneral } from "../../redux/newsApiSlice";

// entertainment - Entertainment News
// health - Health News
// science - Science News
// technology - Technology News

export default function General() {
  const screenHeight = Dimensions.get("window").height;

  const {
    response,
    error,
    isLoading,
    getArticlesRun,
    setIsLoading,
    setResponse,
  } = newsService({
    category: "general",
  });

  const apiData = useSelector((state) => state.news.generalArticles);
  const dispatch = useDispatch();

  const [setModalVisible, setSetModalVisible] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  const handleItemDataOnPress = (articleData) => {
    setModalVisible(true);
    setModalArticleData(articleData);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalArticleData({});
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("general", jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  useEffect(() => {
    if (response) {
      // localStorage.setItem("generalArticles", JSON.stringify(response));
      storeData(response);
      dispatch(updateGeneral(response));
    }
  }, [response, error]);

  useEffect(() => {
    // localStorage.getItem("generalArticles") === null
    async function getData() {
      let data;
      try {
        const jsonValue = await AsyncStorage.getItem("general");
        data = JSON.parse(jsonValue);

        if (!data) {
          getArticlesRun();
        } else {
          setResponse(data);
          setIsLoading(false);
        }
      } catch (e) {
        // error reading value
        console.log(e);
      }
    }

    getData();
  }, []);

  console.log(response);

  return (
    <Container minWidth="100%">
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator animating={isLoading} color="#00f0ff" />
          <Text style={{ marginTop: 10 }} children="Please Wait.." />
        </View>
      ) : (
        <VStack width="100%" style={{ height: "93%", maxHeight: screenHeight }}>
          <ScrollView width="100%" _contentContainerStyle={{ flexGrow: 1 }}>
            {response.map((item, index) => {
              return (
                <DataItem
                  key={index}
                  onPress={handleItemDataOnPress}
                  data={item}
                />
              );
            })}
          </ScrollView>
        </VStack>
      )}
      <ModalC
        showModal={setModalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
}
