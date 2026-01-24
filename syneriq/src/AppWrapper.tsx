'use client';
import React, { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/lib/theme';
import { useTranslation } from 'react-i18next';
import { getDirection } from '@/i18n';
import '@/i18n';  
import RouteChangeLoader from '@/components/RouteChangeLoader';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir  = getDirection(i18n.language);
  }, [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteChangeLoader minDuration={800} logoSrcs="/Syneriq.png" />
      {children}
    </ThemeProvider>
  );
}
