import * as Yup from 'yup'

export const validate = Yup.object({
    email: Yup.string().required('*Required'),
    password: Yup.string().required('Required'),

    })
