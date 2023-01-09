
import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '84vh', height: 'auto', minWidth: '100vw', color: 'lightgray', marginTop: '5px' }} bgcolor={theme.palette.primary.main}>
        <Grid item style={{ width: '900px', textAlign: 'center',fontSize:'30px' }} color={theme.palette.primary.contrastText}>
          under construction
        </Grid>
      </Grid>
    </>
  )
}

export default Home