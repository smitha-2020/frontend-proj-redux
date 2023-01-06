import React from 'react'
import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '10vh', minWidth: '100vw' ,backgroundColor:'lightgray',marginTop:'10px',position: 'fixed',bottom:'0'}}>
                <a href="https://www.linkedin.com/in/smitha-kamath/"><LinkedInIcon/></a>
            </Grid>
        </>
    )
}

export default Footer