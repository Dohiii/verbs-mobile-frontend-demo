import React from "react"
import { StyleSheet } from "react-native"
import { Button, Layout } from "@ui-kitten/components"

export const MainButtons = () => (
  <Layout style={styles.container} level="1">
    <Button style={styles.button} appearance="filled" size="small">
      Zatwierdż
    </Button>

    <Button style={styles.button} appearance="filled" size="small">
      Inny Czasownik
    </Button>

    <Button style={styles.button} status="success" size="small">
      Odpowiedż
    </Button>
  </Layout>
)

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: 2,
  },
})
