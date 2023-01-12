
import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from '../hooks/reduxHook';
import { createTheme, ThemeProvider } from '@mui/material'
import { HeroSection } from '../styledComponent/home';
import Hero from '../../src/components/home/Hero'
import Services from '../components/home/Services';
import Partners from '../components/home/Partners';
import Featured from '../components/home/Featured';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <HeroSection sx={{backgroundColor:'primary.main'}}>
        <Hero/>
        <Featured/>
        <Services/>
        <Partners/>
      </HeroSection>
    </>
  )
}

export default Home