import React from "react";
import { FlatList } from "react-native";

import PostListItem from "../PostListItem";

const PostList = ({ posts, onRefreshing, isLoading }) => {
  return (
    <FlatList
      data={posts}
      renderItem={PostListItem}
      keyExtractor={(item) => item?.id}
      refreshing={isLoading}
      onRefresh={() => onRefreshing()}
    />
  );
};

export default PostList;
