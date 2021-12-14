import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export function notify(msg: string) {
        return toast.error(msg, {theme: 'colored'})
} 
export function success(msg: string) {
        return toast.success(msg, {theme: 'colored'})
    }
    


