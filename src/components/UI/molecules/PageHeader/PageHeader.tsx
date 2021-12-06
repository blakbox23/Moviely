import React from 'react'
import Text from '../../atoms/Text/Text'
import { fonts } from '../../../../constants/fonts'
import './style.css'

interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = ({}) => {
  return (
    <div className="page-header">
      <Text text="Comments" type="page-header" font={fonts.NAVFONT} />
    </div>
  )
}
