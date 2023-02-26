import { StatusBar } from "expo-status-bar"
import { ApplicationProvider } from "@ui-kitten/components"
import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import * as eva from "@eva-design/eva"
import { useState, useContext, useEffect } from "react"
import { FormContext, FormContextInterface } from "./FormContext"
import { useImmerReducer } from "use-immer"
import { formReducer } from "./reducers/formReducer"

const initialFormState = {
  zwrotne: true,
  osoba: ["IO"],
  categoria: "regularny",
  tense: ["Presente Indicativo", "Passato Congiuntivo"],
}

export default function App() {
  const [formState, formDispatch] = useImmerReducer(formReducer, initialFormState)
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  useEffect(() => {
    console.log(formState)
  }, [formState])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <FormContext.Provider value={{ formState, formDispatch }}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
      </FormContext.Provider>
    )
  }
}
