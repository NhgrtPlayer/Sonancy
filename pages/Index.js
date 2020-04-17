import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import theme from '../components/theme';

const Index = () => {
    const { query } = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Header />
        {/* <AppAppBar />
        <ProductHero />
        <AppFooter /> */}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Index;