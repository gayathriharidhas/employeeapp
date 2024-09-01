//Write your missing code here
import { Toolbar, Typography, AppBar, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
      <AppBar>
        <Toolbar position = 'static' style={{ background: "purple" }} >
          <Typography variant='h4' sx={{ flexGrow: 1 }}>Employee App</Typography>
          <Link to='/add'><Button variant='text' color='success' style={{ color: "white" }}>Add</Button></Link>&nbsp;&nbsp;
          <Link to='/home'><Button variant='text' color='success' style={{ color: "white" }}>Home</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar