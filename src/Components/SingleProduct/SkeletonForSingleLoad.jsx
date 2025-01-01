import { Grid2, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonForSingleLoad = () => {
  return (
    <>
                <Grid2 sx={{ flexGrow: 1 }} className="mt-80 container" container spacing={2} >
                <Grid2 size={{xs:12, md:6}}>
      <Skeleton variant='rectangular' width={550} height={460}/>
    </Grid2>
                <Grid2 size={{xs:12, md:6}}>
      <Skeleton variant='rounded' width={520} height={20}/>
      <Skeleton className='mt-2' variant='rounded' width={520} height={40}/>
      <Skeleton className='mt-2' variant='rounded' width={520} height={40}/>
      <Skeleton className='mt-2' variant='rounded' width={520} height={250}/>
      <Skeleton className='mt-2' variant='rounded' width={520} height={80}/>
    </Grid2>
    </Grid2>
    </>
  )
}

export default SkeletonForSingleLoad
