import {useField, useForm} from 'vee-validate'
import * as yup from 'yup';

export function useRequestForm(cb) {
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const {value: name, errorMessage: nError, handleBlur: nBlur} = useField(
    'name',
    yup.string().trim().required('Enter name')
  )
  const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
    'phone',
    yup.string().trim().required('Enter phone')
  )
  const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
    'amount',
    yup.number().required('Enter amount').min(0, 'Min amount = 0')
    )
  const {value: status} = useField('status')

  const onSubmit = handleSubmit(cb)

  return {
    name, nError, nBlur,
    phone, pError, pBlur,
    amount, aError, aBlur,
    status,
    isSubmitting,
    onSubmit
  }
}
