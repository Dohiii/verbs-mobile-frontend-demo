import { StyleSheet } from "react-native"
import { ButtomFormSelectors } from "../components/ButtomForm"
import { FormContext, FormContextInterface } from "../FormContext"
import InformationAboutVerb from "../components/InformationComponent"
import VerbInputFiled from "../components/InputField"
import { MainButtons } from "../components/MainButtons"
import { SpecialButtons } from "../components/SpecialButtons"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import React, { useState, useEffect, useContext } from "react"
import { Button } from "@ui-kitten/components"
import Verbs from "../Verbs.json"

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <InformationAboutVerb />
      <VerbInputFiled />
      <SpecialButtons />
      <MainButtons />
      <Button>State</Button>
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
