import * as Yup from 'yup'

export const validate = Yup.object({
    title: Yup.string().required('*Required'),
    genre: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
   
    })
