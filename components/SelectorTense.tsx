import React, { useState, useEffect, useContext } from "react"
import { FormContext, FormContextInterface } from "../FormContext"
import { IndexPath, Layout, Select, SelectGroup, SelectItem, Text } from "@ui-kitten/components"

interface GroupedData {
  [key: string]: string[]
}

const groupedData: GroupedData = {
  Indicativo: ["Presente Indicativo", "Passato Prossimo", "Imperfetto Indicativo", "Trapassato Prossimo", "Passato Remoto", "Trapassato Remoto", "Futuro Semplice", "Futuro Anteriore"],
  Congiuntivo: ["Presente Congiuntivo", "Passato Congiuntivo", "Imperfetto Congiuntivo", "Trapassato Congiuntivo"],
  Condizionale: ["Presente Condizionale", "Passato Condizionale"],
  Imperativo: ["Presente Imperativo"],
}

export const SelectorTesne = (): JSX.Element => {
  const [multiSelectedIndex, setMultiSelectedIndex] = useState<IndexPath[]>([new IndexPath(0, 0), new IndexPath(1, 1)])
  const { formDispatch } = useContext(FormContext) as FormContextInterface

  const groupDisplayValues = multiSelectedIndex.map((index) => {
    const groupTitle = Object.keys(groupedData)[index.section ?? 0]
    return groupedData[groupTitle][index.row]
  })

  useEffect(() => {
    formDispatch({ type: "CHANGE_TENSE", payload: groupDisplayValues })
    // const newObject = myObject
    // newObject.tense = groupDisplayValues
    // setMyObject(newObject)
    // console.log(myObject)
    // appForm.tense = groupDisplayValues
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
