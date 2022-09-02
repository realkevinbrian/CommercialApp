/***
 * Swipeable Drawer Reusable Component
 */

import { Paper, SwipeableDrawer } from '@mui/material'
import React from 'react'

function SwiperDrawer(props) {
  return (
    <Paper>
        <SwipeableDrawer open={props.state} onClose={()=>props.setOpen(false)} onOpen={()=>console.log("Opened")}>
            {props.children}
        </SwipeableDrawer>
    </Paper>
  )
}

export default SwiperDrawer