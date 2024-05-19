import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: "10px",
    padding: "10px",
  },
  picture: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
});
