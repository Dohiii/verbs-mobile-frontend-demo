import React from "react"
import { StyleSheet } from "react-native"
import { Button, ButtonGroup, Layout } from "@ui-kitten/components"

export const SpecialButtons = () => (
  <Layout style={styles.container} level="1">
    <ButtonGroup style={styles.buttonGroup} appearance="outline" size="tiny">
      <Button>à</Button>
      <Button>è</Button>
      <Button>é</Button>
      <Button>ì</Button>
      <Button>ò</Button>
    </ButtonGroup>
  </Layout>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonGroup: {
    margin: 2,
  },
})
