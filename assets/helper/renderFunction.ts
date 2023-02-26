import { useEffect, useState, useContext } from "react"
import { FormContext, FormContextInterface } from "../../FormContext"

export default function reRender(): void {
  const { myObject, setMyObject } = useContext(FormContext) as FormContextInterface
  console.log(myObject)
}
