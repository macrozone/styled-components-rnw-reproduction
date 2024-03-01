"use client";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Base = styled(View)`
  padding: 20px;
  margin: 20px;
  background-color: #f0f0f0;
  border: 1px solid red;
`;

const TheText = styled(Text)`
  color: green;
`;

export const Test = () => {
  return (
    <Base>
      <TheText>Hello</TheText>
    </Base>
  );
};
