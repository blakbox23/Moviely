import React from 'react'
import Text from '../../atoms/Text/Text'
import { fonts } from '../../../../constants/fonts'
import './style.css'

interface PageHeaderProps {
  text?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text = 'coments' }) => {
  return (
    <div className="page-header">
      <Text text={text} type="page-header" font={fonts.NAVFONT} />
    </div>
  )
}
