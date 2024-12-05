import classnames from 'classnames'
import React, { useState, useRef, useEffect } from 'react'

import styles from './index.module.scss'

export interface FileNameItemProps {
    isprops:string
    value: string
    actived: boolean
    key:string
    onClick: () => void
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
    console.log('props',props)
  const {
    value,
    actived = false,
    onClick,
  } = props

  const [name, setName] = useState(value)
 //classnames作用是根据条件动态添加class
  return (
    <div
      className={classnames(styles['tab-item'], actived ? styles.actived : null)}
      onClick={onClick}
    >
        <span>{name}</span>
    </div>
  )
}
interface Props {
  index:number
}
export const FileNameItem2 = (props:Props) => {
  const { index } = props;
    return (
        <div>
            <span>{index+1}</span>
        </div>
    )
}
