import { StatusBar } from "expo-status-bar"
import { ApplicationProvider } from "@ui-kitten/components"
import useCachedResources from "./hooks/useCachedResources"
import useColorScheme from "./hooks/useColorScheme"
import Navigation from "./navigation"
import * as eva from "@eva-design/eva"
import { useEffect } from "react"
import { FormContext } from "./FormContext"
import { AppContext } from "./AppContext"
import { useImmerReducer } from "use-immer"
import { formReducer, FormStateInterface, initiaFormlState } from "./reducers/formReducer"
import { initialState, appReducer } from "./reducers/appReducer"
import { Verb } from "./interfaces"
import Verbs from "./Verbs.json"
import getRandomElement from "./assets/helper/getReandomElement"
import shuffle from "./assets/helper/shoffle"

const allVerbs = Verbs.verbs

export default function App() {
  const [state, dispatch] = useImmerReducer(appReducer, initialState)
  const [formState, formDispatch] = useImmerReducer(formReducer, initiaFormlState)
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  const filterFormStateAndReturnVerb = (formState: FormStateInterface): void => {
    // work with formSate
    let randomOsoba = getRandomElement(formState.osoba)
    const randomTense = getRandomElement(formState.tense)

    if (randomOsoba === "LUI/LEI") {
      randomOsoba = "LUI"
    }

    const filteredByZwrotne = allVerbs.filter((verb) => verb.zwrotne === formState.zwrotne)
    console.log(filteredByZwrotne.length)

    let filteredVerb: Verb[] = []

    filteredByZwrotne.forEach((verb) => {
      verb.osoba.forEach((osoba: any) => {
        if (osoba.category === formState.categoria && osoba.tense === randomTense) {
          osoba.czasownik = verb.czasownik
          osoba.tlumaczenie = verb.tlumaczenie
          osoba.correctWord = osoba[randomOsoba]
          osoba.pluc = randomOsoba
          filteredVerb.push(osoba)
        }
      })
    })

    shuffle(filteredVerb)

    dispatch({ type: "SET_VERB_IN_STATE", payload: getRandomElement(filteredVerb) })

    // const getRandomVerb: Verb = getRandomElement(filteredVerb)
    // return getRandomElement(filteredVerb)
  }

  useEffect(() => {
    filterFormStateAndReturnVerb(formState)
    console.log(state.verb)
  }, [formState])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <FormContext.Provider value={{ formState, formDispatch }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ApplicationProvider>
        </FormContext.Provider>
      </AppContext.Provider>
    )
  }
}
