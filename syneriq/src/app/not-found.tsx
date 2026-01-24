'use client';
import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '70vh',
      }}
    >
      <Typography variant="h1" fontWeight={800} color="primary" gutterBottom>
        {t('notFoundTitle')}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t('notFoundSubtitle')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('notFoundMessage')}
      </Typography>
      <Box>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          {t('goHome')}
        </Button>
        <Button
          component={Link}
          href="/contact"
          variant="outlined"
          color="secondary"
        >
          {t('contactUs')}
        </Button>
      </Box>
    </Container>
  );
}
