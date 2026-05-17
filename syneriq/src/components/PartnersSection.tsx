'use client';
import React from 'react';
import { Box, Typography, Container, useTheme, alpha } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Placeholder partner names, since logos are not provided yet.
// In a real scenario, this would be an array of objects with { logoUrl, name }.
const partnersList = [
    'Schneider Electric', 'Caterpillar', 'Siemens', 'ABB', 'Cummins', 'MTU', 'Volvo Penta', 'Deep Sea Electronics', 'Perkins', 'Lovato'
];

export default function PartnersSection() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isRTL = i18n.language === 'ar';

    return (
        <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: theme.palette.secondary.main, overflow: 'hidden', borderTop: `1px solid ${alpha('#fff', 0.1)}`, borderBottom: `1px solid ${alpha('#fff', 0.1)}` }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: 2 }}>
                    {isRTL ? 'شركاء النجاح' : 'Success Partners'}
                </Typography>
                <Typography variant="h3" fontWeight={900} sx={{ mt: 1, color: '#fff' }}>
                    {t('partnersTitle', 'Our Trusted Partners')}
                </Typography>
                <Typography sx={{ mt: 2, maxWidth: 600, mx: 'auto', fontSize: '1.1rem', color: alpha('#fff', 0.8) }}>
                    {t('partnersDesc', 'We collaborate with world-class engineering and technology brands to deliver uncompromising quality and reliability.')}
                </Typography>
            </Container>

            {/* Infinite Marquee Container */}
            <Box sx={{
                display: 'flex',
                width: 'max-content',
                animation: 'scrollX 40s linear infinite',
                '@keyframes scrollX': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                '&:hover': {
                    animationPlayState: 'paused'
                }
            }}>
                {/* Render twice for seamless loop. Note: translateX(-50%) means it skips halfway, so we need content duplicated twice to loop smoothly */}
                {[...partnersList, ...partnersList, ...partnersList].map((p, index) => (
                    <Box key={index} sx={{
                        minWidth: 220,
                        px: 4,
                        py: 3,
                        mx: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        borderRadius: 4,
                        boxShadow: `0 4px 20px ${alpha('#000', 0.03)}`,
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        '&:hover': {
                            bgcolor: theme.palette.primary.main,
                            color: '#fff',
                            borderColor: theme.palette.primary.main,
                            transform: 'translateY(-5px)',
                            boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`
                        }
                    }}>
                        <Typography variant="h6" fontWeight={800} sx={{ color: 'inherit' }}>
                            {p}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
