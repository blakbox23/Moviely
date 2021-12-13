import * as Yup from 'yup'

export const validate = Yup.object({
    title: Yup.string().required('*Required'),
    genre: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
    runtime: Yup.string().required('Required'),
    imageUrl: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    trailerUrl: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    })
