import { useEffect, useState } from "react";

import { Text, View } from "react-native";

import PostsList from "../components/PostsList";

import { Fetcher } from "../utils/fetcher";

import { container, header } from "../constants/styles";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await getPosts();
      } catch (e) {
        alert(e.message);
      }
    })();
  }, []);

  const getPosts = async () => {
    try {
      await setLoading(true);

      const posts = await Fetcher("https://jsonplaceholder.typicode.com/posts");

      await setPosts(posts);

      setLoading(false);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={container}>
      <Text style={header}>Posts List</Text>

      <PostsList posts={posts} isLoading={loading} onRefreshing={getPosts} />
    </View>
  );
}
