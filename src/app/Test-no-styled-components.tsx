"use client";
import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  base: {
    padding: 20,
    margin: 20,
    backgroundColor: "#f0f0f0",
    borderLeftColor: "red",
    borderLeftWidth: 1,
    borderRightColor: "red",
    borderRightWidth: 1,
    borderTopColor: "red",
    borderTopWidth: 1,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  theText: {
    color: "green",
  },
});

export const Test = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <View style={styles.base}>
      <Text style={styles.theText}>Hello</Text>
    </View>
  ) : (
    <Text style={styles.base}>no show</Text>
  );
};
