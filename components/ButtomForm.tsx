import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { IndexPath, Layout, Select, SelectGroup, SelectItem } from "@ui-kitten/components"
import { SelectorZwrotne } from "./SelectorZwrotne"
import { SelectorTesne } from "./SelectorTense"
import { SelectorCategoria } from "./SelectorCategoria"
import { SelectorOsoba } from "./SelectorOsoba"

export const ButtomFormSelectors = (): JSX.Element => {
  return (
    <Layout style={styles.container} level="1">
      <SelectorZwrotne />
      <SelectorCategoria />
      <SelectorOsoba />
      <SelectorTesne />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  select: {
    flex: 1,
    margin: 2,
  },
})
