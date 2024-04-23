import React from "react";
import { Text, ScrollView, View } from "react-native";
import postCardStyles from "./styles";

const PostDetailsCard = ({ post }) => {
  return (
    <View style={[postCardStyles.card]}>
      <Text style={postCardStyles.title}>{post.title}</Text>
      <Text style={postCardStyles.userId}>User ID: {post.userId}</Text>
      <ScrollView style={postCardStyles.bodyContainer}>
        <Text style={postCardStyles.body}>{post.body}</Text>
      </ScrollView>
    </View>
  );
};

export default PostDetailsCard;
