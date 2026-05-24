'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container, useTheme, alpha } from '@mui/material';
import { useTranslation } from 'react-i18next';

const partnersList = [
    { name: 'Alimar', logo: '/logos/alimar-logo-black.png' },
    { name: 'Pioneer Systems', logo: '/logos/Logo 6.png' },
    { name: 'AQUA ARABIA', logo: '/logos/logo-2.png' },
    { name: 'FEBO', logo: '/logos/logo-en.png' },
    { name: 'Radial', logo: '/logos/radial-logo-blue.svg' },
];

export default function PartnersSection() {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative' }}>

            {/* Shape فوق */}
            <Box sx={{ position: 'absolute', top: -1, left: 0, right: 0, zIndex: 3, lineHeight: 0 }}>
                <svg
                    viewBox="0 0 1440 60"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ display: 'block', width: '100%', height: 60 }}
                >
                    <polygon points="0,0 1440,0 720,60" fill={theme.palette.background.default} />
                </svg>
            </Box>

            {/* Shape تحت */}
            <Box sx={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 3, lineHeight: 0 }}>
                <svg
                    viewBox="0 0 1440 60"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ display: 'block', width: '100%', height: 60 }}
                >
                    <polygon points="0,60 1440,60 720,0" fill={theme.palette.background.default} />
                </svg>
            </Box>

            {/* Section */}
            <Box
                sx={{
                    py: { xs: 10, md: 12 },
                    bgcolor: theme.palette.secondary.main,
                    overflow: 'hidden',
                }}
            >
                <Box sx={{ position: 'relative', zIndex: 2 }}>

                    {/* Header */}
                    <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 800,
                                letterSpacing: 2,
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            {t('partnersSubtitle', 'Success Partners')}
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                mt: 1,
                                color: '#fff',
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: theme.typography.h3.fontWeight,
                            }}
                        >
                            {t('partnersTitle', 'Our Trusted Partners')}
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 2,
                                maxWidth: 600,
                                mx: 'auto',
                                color: alpha('#fff', 0.75),
                                lineHeight: 1.8,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: theme.typography.subtitle1.fontWeight,
                            }}
                        >
                            {t('partnersDesc', 'We collaborate with world-class engineering and technology brands to deliver uncompromising quality and reliability.')}
                        </Typography>
                    </Container>

                    {/* Logos */}
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { xs: 3, md: 4 },
                            }}
                        >
                            {partnersList.map((p, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: alpha('#fff', 0.92),
                                        borderRadius: `${theme.shape.borderRadius}px`,
                                        px: 4,
                                        py: 2.5,
                                        minWidth: 160,
                                        transition: 'all 0.25s ease',
                                        cursor: 'default',
                                        '&:hover': {
                                            bgcolor: '#fff',
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 12px 30px ${alpha('#000', 0.15)}`,
                                        },
                                    }}
                                >
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        width={140}
                                        height={56}
                                        style={{ objectFit: 'contain', maxHeight: 56 }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Container>

                </Box>
            </Box>
        </Box>
    );
}