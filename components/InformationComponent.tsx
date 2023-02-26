import { Layout, Text } from "@ui-kitten/components"
import { StyleSheet } from "react-native"

export default function InformationAboutVerb() {
  return (
    <Layout>
      <Layout style={styles.row}>
        <Text style={styles.mainVerb}>Fare</Text>
        <Text>(Robić, Dzieałać)</Text>
      </Layout>
      <Text>Presente Indicativo</Text>
      <Layout></Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  mainVerb: {
    color: "red",
  },
  row: {
    flexDirection: "row",
  },
})
