"use client"

import { FormEventHandler } from "react"
import { create } from "@/app/actions"

const MyForm = ({ onSubmit }: { onSubmit: FormEventHandler<HTMLFormElement> }) => (
  <form onSubmit={onSubmit} className="w-full flex flex-col items-center justify-center">
    <div className="m-4">
      <label >Test Name</label>
      <input type="text" placeholder="Something" name="name" />
    </div>
    <div className="m-4">
      <input type="file" name="file" />
    </div>
    <div className="m-4">
      <button type="submit">Submit</button>
    </div>
  </form>
)

const FormTest = () => {
  const handleNextSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    create(formData)
  }

  const handleExpressSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);

    console.log(data.get("file"));
    fetch("http://localhost:7100", {
      method: "POST",
      body: data
    }).then(res => console.log(res))
  }

  return (
    <div className="flex h-lvh">
      <MyForm onSubmit={handleNextSubmit} />

      <MyForm onSubmit={handleExpressSubmit} />
    </div>
  )
}

export default FormTest
