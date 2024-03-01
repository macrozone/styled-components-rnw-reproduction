"use client";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? (
    <Base>
      <TheText>Hello</TheText>
    </Base>
  ) : (
    <TheText>no show</TheText>
  );
};
