import * as Yup from 'yup'

export const validate = Yup.object({
    email: Yup.string().email().required('*Required'),
    password: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    })
