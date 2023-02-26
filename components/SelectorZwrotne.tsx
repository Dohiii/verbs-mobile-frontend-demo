import React, { useState, useEffect, useContext } from "react"
import { IndexPath, Layout, Select, SelectItem, Text } from "@ui-kitten/components"
import { FormContext, FormContextInterface } from "../FormContext"

const data: string[] = ["Tak", "Nie"]

export const SelectorZwrotne = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0))
  const { formDispatch } = useContext(FormContext) as FormContextInterface
  const displayValue = data[selectedIndex.row]

  const renderOption = (title: string): JSX.Element => <SelectItem key={title} title={title} />

  useEffect(() => {
    let data = false
    displayValue === "Tak" ? (data = true) : (data = false)
    // setMyObject(newObject)
    // console.log(myObject)
    // appForm.zwrotne = displayValue
    formDispatch({ type: "CHANGE_ZWROTNE", payload: data })
  }, [selectedIndex])

  return (
    <Layout>
      <Text>Zwrotne</Text>
      <Select placeholder="Default" value={displayValue} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index as IndexPath)}>
        {data.map((key) => renderOption(key))}
      </Select>
    </Layout>
  )
}
