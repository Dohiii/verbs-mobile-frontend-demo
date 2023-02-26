import React, { useState, useContext, useEffect } from "react"
import { FormContext, FormContextInterface } from "../FormContext"
import { IndexPath, Layout, Select, SelectItem, Text } from "@ui-kitten/components"

const data: string[] = ["regularny", "nieregularny"]

export const SelectorCategoria = (): JSX.Element => {
  // I use typecasting on the useContext Hook to prevent TypeScript from throwing errors because the context will be null at the beginning.
  const { formDispatch } = useContext(FormContext) as FormContextInterface
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0))

  const displayValue = data[selectedIndex.row]

  const renderOption = (title: string): JSX.Element => <SelectItem key={title} title={title} />

  useEffect(() => {
    formDispatch({ type: "CHANGE_CATEGORY", payload: displayValue })
  }, [selectedIndex])

  return (
    <Layout>
      <Text>Wybierż kategorie</Text>
      <Select placeholder="Default" value={displayValue} selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index as IndexPath)}>
        {data.map((key) => renderOption(key))}
      </Select>
    </Layout>
  )
}
