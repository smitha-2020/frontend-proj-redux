import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Fulfilled = () => {
  return (
    <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', minWidth: '100vw', color: 'lightgray' }}>
    <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '300px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
        <Grid container display="flex" flexDirection="column" style={{ width: '900px', textAlign: 'center' }} >
            <Grid item>
            Success
            </Grid>
            <Grid item>
            <NavLink to="/profile">Head back to profile page</NavLink>
            </Grid>
        </Grid>
    </Grid>
</Grid>
  )
}

export default Fulfilled