import { Layout, Text, Input } from "@ui-kitten/components"
import { useState } from "react"
import { StyleSheet } from "react-native"

export default function VerbInputFiled() {
  const [value, setValue] = useState("")

  return (
    <Layout style={styles.inputContanier}>
      <Text style={styles.labelStyle}>IO</Text>
      <Input style={styles.inputStyles} placeholder="Place your Text" value={value} onChangeText={(nextValue) => setValue(nextValue)} />
    </Layout>
  )
}

const styles = StyleSheet.create({
  inputContanier: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
  },
  labelStyle: {
    marginRight: 10,
    flex: 1,
  },
  inputStyles: {
    flex: 7,
  },
  row: {
    flexDirection: "row",
  },
})
