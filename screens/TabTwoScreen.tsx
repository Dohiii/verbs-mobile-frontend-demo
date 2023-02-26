import { StyleSheet } from "react-native"
import { ButtomFormSelectors } from "../components/ButtomForm"
import VerbInputFiled from "../components/InputField"
import { MainButtons } from "../components/MainButtons"
import { SpecialButtons } from "../components/SpecialButtons"
import { FormContext, FormContextInterface } from "../FormContext"
import { Text, View } from "../components/Themed"
import InformationAboutVerb from "../components/InformationComponent"
import React, { useState, useEffect, useContext } from "react"

export default function TabTwoScreen() {
  const { myObject, setMyObject } = useContext(FormContext) as FormContextInterface

  return (
    <View style={styles.container}>
      <InformationAboutVerb />
      <VerbInputFiled />
      <VerbInputFiled />
      <VerbInputFiled />
      <VerbInputFiled />
      <VerbInputFiled />
      <VerbInputFiled />
      <SpecialButtons />
      <MainButtons />
      <ButtomFormSelectors />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
