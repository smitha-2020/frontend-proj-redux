import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHook'
import NoData from '../NoData'


const Fulfilled = () => {
  const authentication = useAppSelector(state => state.auhtReducer)
  if (authentication.avatar !== "") {
    return (
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', minWidth: '100vw', color: 'lightgray' }}>
      <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '300px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
          <Grid container display="flex" flexDirection="column" style={{ width: '900px', textAlign: 'center' }} >
              <Grid item>
              Success
              </Grid>
              <Grid item>
              <Link to="/profile">Head back to profile page</Link>
              </Grid>
          </Grid>
      </Grid>
  </Grid>
    )

  }else{
    return(
      <NoData/>
    )
  }
  
}

export default Fulfilled