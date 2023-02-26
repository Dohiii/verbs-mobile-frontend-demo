import { StyleSheet } from "react-native"
import { ButtomFormSelectors } from "../components/ButtomForm"
import InformationAboutVerb from "../components/InformationComponent"
import VerbInputFiled from "../components/InputField"
import { MainButtons } from "../components/MainButtons"
import { SpecialButtons } from "../components/SpecialButtons"
import { View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import React, { useState, useEffect, useContext } from "react"

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <InformationAboutVerb />
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
    padding: 20,
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
