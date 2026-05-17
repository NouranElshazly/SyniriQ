'use client';
import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Zoom in={isVisible}>
            <Fab
                color="primary"
                onClick={scrollToTop}
                aria-label="scroll back to top"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 20, md: 40 },
                    right: { xs: 20, md: 40 },
                    zIndex: 1000,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                    '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        transform: 'scale(1.1)',
                    },
                    transition: 'transform 0.3s, background-color 0.3s'
                }}
            >
                <KeyboardArrowUpIcon fontSize="large" />
            </Fab>
        </Zoom>
    );
}
