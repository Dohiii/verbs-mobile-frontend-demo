import { Layout, Text } from "@ui-kitten/components"
import { useContext } from "react"
import { StyleSheet } from "react-native"
import { AppContext } from "../AppContext"

export default function InformationAboutVerb() {
  const { state } = useContext(AppContext)

  return (
    <Layout>
      <Layout style={styles.row}>
        <Text style={styles.mainVerb}>{state.verb?.czasownik ?? ""}</Text>
        <Text>({state.verb?.tlumaczenie ?? ""})</Text>
      </Layout>
      <Text>{state.verb?.tense ?? ""}</Text>
      <Layout></Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  mainVerb: {
    color: "red",
    textTransform: "capitalize",
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
  },
})
