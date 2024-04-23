import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";
import postsListItemStyles from "./styles";

const PostListItem = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/details/[id]",
        params: { id: item?.id },
      }}
      asChild
    >
      <TouchableOpacity>
        <View style={postsListItemStyles.container}>
          <Text style={postsListItemStyles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default PostListItem;
