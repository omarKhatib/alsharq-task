import React, { useEffect, useState } from "react";

import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

import PostDetailsCard from "../../components/PostDetailsCard";

import { Fetcher } from "../../utils/fetcher";

import { router } from "expo-router";
import { scale } from "react-native-size-matters";

import { backArrow } from "../../constants/styles";

const PostDetails = () => {
  // this screen will handle the post detials functionality by recieving the id param dynamically
  const { id } = useLocalSearchParams();

  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const postDetails = await Fetcher(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        await setPostDetails(postDetails);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [id]);

  return (
    <View style={{ flex: 1 }}>
      {!postDetails ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginBottom: scale(10),
            }}
          >
            <Text style={backArrow}>&#8592;</Text>
          </TouchableOpacity>

          <PostDetailsCard post={postDetails} />
        </View>
      )}
    </View>
  );
};

export default PostDetails;
