import * as Yup from 'yup'

let currentTime = new Date()
let month = currentTime.getMonth() + 1
let day = currentTime.getDate()
let year = currentTime.getFullYear()

export const validate = Yup.object({

    year: Yup.number()
    .typeError('Year must be a number')
    .positive('year must be appropriate')
    .min(1900, "Must be an appropriate year")
    .max(year, "Must be an appropriate year")
    })
