import React, { useState, useEffect, useContext } from "react"
import { FormContext, FormContextInterface } from "../FormContext"
import { IndexPath, Layout, Select, SelectGroup, SelectItem, Text } from "@ui-kitten/components"

interface GroupedData {
  [key: string]: string[]
}

const groupedData: GroupedData = {
  all: ["IO", "TU", "LUI/LEI", "NOI", "VOI", "LORO"],
}

export const SelectorOsoba = (): JSX.Element => {
  const [multiSelectedIndex, setMultiSelectedIndex] = useState<IndexPath[]>([new IndexPath(0, 0)])
  const { formDispatch } = useContext(FormContext) as FormContextInterface

  const groupDisplayValues = multiSelectedIndex.map((index) => {
    const groupTitle = Object.keys(groupedData)[index.section ?? 0]
    return groupedData[groupTitle][index.row]
  })

  useEffect(() => {
    // const newObject = myObject
    // newObject.osoba = groupDisplayValues
    // setMyObject(newObject)
    // console.log(appForm)
    // appForm.osoba = groupDisplayValues
    formDispatch({ type: "CHANGE_OSOBY", payload: groupDisplayValues })
  }, [multiSelectedIndex])

  const renderGroup = (title: string, index: number): JSX.Element => (
    <SelectGroup key={index} title={title}>
      {groupedData[title].map((item, subIndex) => (
        <SelectItem key={`${index}-${subIndex}`} title={item} />
      ))}
    </SelectGroup>
  )

  const handleMultiSelect = (index: IndexPath[] | IndexPath) => {
    if (Array.isArray(index)) {
      setMultiSelectedIndex(index)
    } else {
      setMultiSelectedIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes]
        newIndexes[index.section ?? 0] = index
        return newIndexes
      })
    }
  }

  return (
    <Layout>
      <Text>Wybierż czas</Text>
      <Select multiSelect={true} placeholder="Multi" value={groupDisplayValues.join(", ")} selectedIndex={multiSelectedIndex} onSelect={handleMultiSelect}>
        {Object.keys(groupedData).map((key, index) => renderGroup(key, index))}
      </Select>
    </Layout>
  )
}
