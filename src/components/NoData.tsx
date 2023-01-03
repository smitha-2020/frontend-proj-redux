import { Grid } from '@mui/material'
import React from 'react'

const NoData = () => {
    return (
        <>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '80vh', minWidth: '100vw', color: 'lightgray' }}>
                <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '200px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
                    <Grid item style={{ width: '900px', textAlign: 'center' }} >
                        No items found
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default NoData