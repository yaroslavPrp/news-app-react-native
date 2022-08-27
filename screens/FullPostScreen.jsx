import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id, title } = route.params;

  console.log(navigation);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    
    axios
      .get(`https://6308b14e46372013f5841c91.mockapi.io/acticles/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("OOps!", "Error fetching article");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View style={styles.fullPost}>
        <PostImage source={{ uri: data.imageUrl }} />
        <PostText>{data.text}</PostText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullPost: {
    padding: 15,
  },
});
