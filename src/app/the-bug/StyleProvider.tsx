"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();

    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
      </>
    );
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return <>{children}</>;
};
