import { Backdrop } from '@mui/material'
import React from 'react'

function BackDrop(props) {
  return (
    <Backdrop open={props.open}>
        {props.children}
    </Backdrop>
  )
}

export default BackDrop