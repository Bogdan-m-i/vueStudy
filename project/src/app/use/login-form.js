import {computed, watch} from 'vue'
import {useStore} from 'vuex'
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
import {useRouter} from "vue-router";

export function useLoginForm() {

  const store = useStore()
  const router = useRouter()

  const {handleSubmit, isSubmitting, submitCount} = useForm()

  const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
    'email',
    yup.string().trim().required('Введите емаил').email()
  )

  const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
    'password',
    yup.string().trim().required('Введите пароль').min(6, 'Пароль не менее 6 символов')
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, (val) => {
    if (val) setTimeout(() => { submitCount.value = false }, 1500)
  })

  const onSubmit = handleSubmit(async (values) => {
    console.log("-> values", values);
    await store.dispatch('auth/login', values)
    router.push('/')
  })

  return {email, eError, eBlur, password, pError, pBlur, onSubmit, isSubmitting, isTooManyAttempts}

}
