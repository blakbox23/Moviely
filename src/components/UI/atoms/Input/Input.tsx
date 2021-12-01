// import React from 'react'
// import './style.css'

// interface Props {
//   placeholder: string
//   type: string
//   inputplacement?: string
//   border?: boolean
// }

// const Input: React.FC<Props> = ({
//   placeholder,
//   type,
//   inputplacement,
//   border = true,
// }) => {
//   return (
//     <div>
//       <input
//         className={`input  ${inputplacement} ${border}  ${type} ${placeholder}} type=${type} placeholder=${placeholder}`}
//         style={{ fontFamily: 'calibri' }}
//       />
//     </div>
//   )
// }

// export default Input
import React from 'react'
import './style.css'

interface InputProps {
  placeholder: string
  type: string
  inputplacement?: string
  border?: boolean
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  inputplacement,
  border = false,
}) => {
  return (
    <div>
      <input
        className={`input ${inputplacement} ${border ? 'border' : ''} `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
