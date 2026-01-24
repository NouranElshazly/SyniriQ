'use client';
import * as React from 'react';
import { Box, Grid, Typography, Button, Divider, Paper, Stack } from '@mui/material';
import Link from 'next/link';

export default function FeatureRow({
  reverse=false, img, title, desc, ctaHref='/contact', ctaLabel='Contact Us'
}: { reverse?: boolean; img: string; title: string; desc: string; ctaHref?: string; ctaLabel?: string; }) {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center" direction={reverse ? 'row-reverse' : 'row'}>
      {/* Image */}
      <Grid item xs={12} md={6}>
        <Paper elevation={6} sx={{
          position: 'relative', overflow: 'hidden', borderRadius: 4,
          transition: 'transform .35s ease, box-shadow .35s ease',
          '&:hover': { transform: { md: 'translateY(-6px)' }, boxShadow: 10 }
        }}>
          <Box
            sx={{
              height: { xs: 200, sm: 260, md: 360 },
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* caption (hidden on xs to save space) */}
          <Box sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'absolute', left: 0, right: 0, bottom: 0, p: 2,
            background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.45))', color: '#fff'
          }}>
            <Typography fontWeight={800}>{title}</Typography>
          </Box>
        </Paper>
      </Grid>

      {/* Copy */}
      <Grid item xs={12} md={6}>
        <Box sx={{ px: { md: 2 } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, mb: .5, typography: { md: 'h4' } }}
          >
            {title}
          </Typography>
          <Divider sx={{ width: 56, mb: 2, borderColor: 'secondary.main', mx: { xs: 'auto', md: 0 } }} />
          <Typography color="text.secondary" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>{desc}</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: { xs: 'stretch', sm: 'flex-start' } }}>
            <Button component={Link} href={ctaHref} variant="contained">{ctaLabel}</Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
