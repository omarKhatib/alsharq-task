import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { colors, borderRadius } from "../../constants/styles";

const postCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.lightGray,
    padding: scale(20),
    borderRadius: borderRadius.default,
  },
  title: {
    fontSize: scale(28),
    fontWeight: "bold",
    marginBottom: scale(10),
    color: "#000",
  },
  userId: {
    fontSize: scale(22),
    color: "#546E7A",
    marginBottom: scale(30),
  },
  bodyContainer: {
    flex: 1,
  },

  body: {
    fontSize: scale(22),
    color: colors.black,
  },
});

export default postCardStyles;
