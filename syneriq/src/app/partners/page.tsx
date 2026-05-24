'use client';
import * as React from 'react';
import Image from 'next/image';
import { Container, Typography, Box, Grid, useTheme, alpha, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';

export default function PartnersPage() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isRTL = i18n.language === 'ar';

    const partners = [
        { name: 'Alimar', logo: '/logos/alimar-logo-black.png' },
        { name: 'Pioneer Systems', logo: '/logos/Logo 6.png' },
        { name: 'AQUA ARABIA', logo: '/logos/logo-2.png' },
        { name: 'FEBO', logo: '/logos/logo-en.png' },
        { name: 'Radial', logo: '/logos/radial-logo-blue.svg' },
    ];

    return (
        <Box dir={i18n.dir()} sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', pb: 12 }}>

            {/* Hero Header */}
            <Box sx={{
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #1a2e10 100%)`,
                color: '#fff',
                height: { xs: 280, md: 450 },
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center'
            }}>
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(/aboutus_dark_pattern.png)',
                    backgroundSize: '250px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.15,
                    mixBlendMode: 'screen',
                    animation: 'scrollPattern 40s linear infinite',
                    '@keyframes scrollPattern': {
                        from: { backgroundPosition: '0 0' },
                        to: { backgroundPosition: '-500px 500px' }
                    }
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 8 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: 2 }}>
                            {isRTL ? 'شركاؤنا الاستراتيجيون' : 'Strategic Partners'}
                        </Typography>
                        <Typography variant="h2" fontWeight={900} sx={{ color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                            {t('partnersTitle', 'Our Partners')}
                        </Typography>
                        <Typography variant="h6" sx={{ color: alpha('#fff', 0.9), fontWeight: 400, maxWidth: 600 }}>
                            {isRTL ? 'نحن نتعاون مع أفضل الماركات العالمية لتقديم حلول لا تقبل المساومة.' : 'We collaborate with world-class engineering brands to deliver uncompromising quality.'}
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Breadcrumbs */}
            <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
                <BreadcrumbsNav />
            </Container>

            {/* Partners Grid */}
            <Container maxWidth="lg" sx={{ pt: 2 }}>
                <Grid container spacing={3} justifyContent="center">
                    {partners.map((partner, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08, duration: 0.45 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        bgcolor: '#fff',
                                        border: `1.5px solid ${theme.palette.divider}`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                        cursor: 'default',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: `0 16px 40px ${alpha(theme.palette.primary.main, 0.12)}`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 90,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: alpha(theme.palette.secondary.main, 0.03),
                                            borderRadius: 3,
                                            p: 2,
                                        }}
                                    >
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={140}
                                            height={60}
                                            style={{ objectFit: 'contain', maxHeight: 60 }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        color="text.primary"
                                        textAlign="center"
                                        sx={{ fontSize: '0.95rem', letterSpacing: 0.3 }}
                                    >
                                        {partner.name}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
