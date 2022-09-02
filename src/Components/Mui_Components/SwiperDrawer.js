import { Paper, SwipeableDrawer } from '@mui/material'
import React from 'react'

function SwiperDrawer(props) {
  return (
    <Paper>
        <SwipeableDrawer open={props.state} onClose={()=>console.log("Closed")} onOpen={()=>console.log("Opened")}>
            {props.children}
        </SwipeableDrawer>
    </Paper>
  )
}

export default SwiperDrawer