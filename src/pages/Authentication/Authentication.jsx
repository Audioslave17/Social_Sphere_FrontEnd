import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'

const Authentication = () => {
  return (
    <div>
        <Grid container>
            <Grid className='h-screen overflow-hidden' item sx={7}>
                <img className='h-full w-full object-cover' src="https://png.pngtree.com/png-vector/20230923/ourmid/pngtree-connected-people-networks-marketing-png-image_10103262.png" alt="" />
            </Grid>
            <Grid item sx={5}>
              <div className='px-20 flex flex-col justify-center h-full mb-5 space-y-1'>
                <Card className='card p-8'>
                  <div className='flex flex-col items-center mb-5 space-y-1'>
                    <h1 className='logo text-center'>Social Sphere</h1>
                    <p className='text-center text-sm w-[70&]'>Connecting lives, Sharing stories: Your social world, Your way</p>
                  </div>
                  <Login/>
                </Card>
              </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Authentication