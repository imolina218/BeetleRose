import { useState } from "react"

const useFormValidator = () => {
  const initialValues = { name: "", email: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.name) {
      errors.name = "Name is required!"
    } else if (values.name.length < 3 && values.name.length > 10) {
      errors.name = "Name must be more than 2 characters and less than 10 characters!"
    }
    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regex.test(values.email)) {
      errors.email = "This is a not valid email format!"
    }
    return errors
  }
}
export default useFormValidator
