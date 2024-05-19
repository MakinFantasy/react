import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: "20px",
    padding: "20px",
    flexGrow: 1,
  },
  picture: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
});
