'use client';
import * as React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  img: string;
  title: string;
  desc: string;
  reverse?: boolean;
  primaryHref: string;
  primaryLabel: string;
};

export default function AltBand({ img, title, desc, reverse, primaryHref, primaryLabel }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is mobile

  return (
    <Box
      component="section"
      sx={{
        m:4,
        display: 'flex',
        flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row', // Change layout for mobile
        alignItems: 'center',
        gap: 4,
        py: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
            borderRadius: 8,
          }}
        />
      </Box>
      <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}> {/* Center text for mobile */}
        <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 3 }}>{desc}</Typography>
        <Button component={Link} href={primaryHref} variant="contained" color="primary">
          {primaryLabel}
        </Button>
      </Box>
    </Box>
  );
}