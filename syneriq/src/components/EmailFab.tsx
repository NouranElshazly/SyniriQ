'use client';
import React from 'react';
import { Fab, Tooltip, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const COMPANY_EMAIL = 'mailto:info@syneriq.com';

export default function EmailFab() {
    const theme = useTheme();

    return (
        <Tooltip title="info@syneriq.com" placement="left" arrow>
            <Fab
                component="a"
                href={COMPANY_EMAIL}
                aria-label="Send us an email"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 80, md: 110 },
                    right: { xs: 20, md: 40 },
                    zIndex: 1000,
                    bgcolor: theme.palette.secondary.main,
                    color: '#fff',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    '&:hover': {
                        bgcolor: theme.palette.secondary.dark,
                        transform: 'scale(1.1)',
                    },
                    transition: 'transform 0.3s, background-color 0.3s',
                }}
            >
                <EmailIcon fontSize="medium" />
            </Fab>
        </Tooltip>
    );
}
