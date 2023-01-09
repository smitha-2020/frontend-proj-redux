
import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center"  sx={{bgcolor:'primary.main',minHeight:'84vh',height:'auto',minWidth:'100vw',color:'lightgray',marginTop:'5px'}}>
        <Grid item color={theme.palette.primary.contrastText} sx={{width:'900px',textAlign:'center',fontSize:'30px'}}>
          under construction
        </Grid>
      </Grid>
    </>
  )
}

export default Home