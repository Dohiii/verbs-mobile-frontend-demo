import React, { createContext, Dispatch } from "react"
import { FormStateInterface, FormActionInterface } from "./reducers/formReducer"

interface FormContextInterface {
  formState: FormStateInterface
  formDispatch: Dispatch<FormActionInterface>
}

const FormContext = createContext<FormContextInterface>({
  formState: {
    zwrotne: true,
    osoba: [""],
    categoria: "",
    tense: [""],
  },
  formDispatch: () => {},
})

export { FormContext, FormContextInterface }
