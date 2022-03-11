import * as Yup from 'yup'

export const validate = Yup.object({
    firstname: Yup.string().required('*Required'),
    secondname: Yup.string().required('Required'),

    })
