'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { PaletteMode, Grid, Container } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '@/components/header/Header';
import Footer from '@/components/footter/Footer';
import BasicHeader from '@/components/header/BasicHeader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    // 토글 후 현재 모드를 로컬 스토리지에 저장
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('colorMode', newMode);
  };

  const toggleColorLight = () => {
    setMode('light');
    localStorage.setItem('colorMode', 'light');
  };

  const toggleColorDark = () => {
    setMode('dark');
    localStorage.setItem('colorMode', 'dark');
  };

  useEffect(() => {
    // 로컬 스토리지에서 이전에 선택한 모드 불러오기
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode);
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }} minHeight={'70vh'}>
        {/* <Header
         mode={mode}
         toggleColorMode={toggleColorMode}
         toggleColorLight={toggleColorLight}
         toggleColorDark={toggleColorDark}
        /> */}
        <BasicHeader/>
        <Grid container>{children}</Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
