import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Main() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  // Function that generates a random color based on hexadecimal numbers.
  const generateBackgroundColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: backgroundColor }}
      onTouchStart={() => generateBackgroundColor()}
    >
      <Text style={styles.helloText}>Hello there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloText: {
    fontSize: 32,
    fontWeight: "thin",
  },
});
