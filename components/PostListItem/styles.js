import { StyleSheet } from "react-native";

import { colors, borderRadius } from "../../constants/styles";
import { scale } from "react-native-size-matters";

//baraaaa
const postsListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: scale(15),
    marginVertical: scale(5),
    borderRadius: borderRadius.default,
  },
  title: {
    fontSize: scale(18),
    fontWeight: "600",
    color: colors.black,
  },
});

export default postsListItemStyles;
