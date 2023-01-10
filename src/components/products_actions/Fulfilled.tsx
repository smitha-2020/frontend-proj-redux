import { Grid } from '@mui/material'

const Fulfilled = () => {
  return (
    <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', minWidth: '100vw', color: 'lightgray' }}>
    <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '300px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
        <Grid item style={{ width: '900px', textAlign: 'center' }} >
           Success
        </Grid>
    </Grid>
</Grid>
  )
}

export default Fulfilled