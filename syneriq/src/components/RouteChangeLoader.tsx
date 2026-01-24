'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

type Props = { minDuration?: number; logoSrcs?: string };

export default function RouteChangeLoader({ minDuration = 800, logoSrcs = '/Syneriq.png' }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(true);
  const timerRef = React.useRef<any>(null);

   React.useEffect(() => {
    timerRef.current = setTimeout(() => setVisible(false), minDuration);
    return () => clearTimeout(timerRef.current);
  }, [minDuration]);

   React.useEffect(() => {
    setVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), minDuration);
    return () => clearTimeout(timerRef.current);
  }, [pathname, minDuration]);

  if (!visible) return null;

  return (
    <Box
      role="status"
      aria-live="polite"
      aria-busy="true"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1400,
        display: 'grid',
        placeItems: 'center',
        bgcolor: '#fff',  
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <img src={logoSrcs} alt="Logo" width={400} height={400} />
        <Typography variant="subtitle1" fontWeight={900} sx={{ letterSpacing: 6 }}>
          Loading...
        </Typography>
      </Stack>
    </Box>
  );
}
