'use client';
import * as React from 'react';
import { Container, Typography, Box, Grid, useTheme, alpha, Paper, Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function PartnersPage() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isRTL = i18n.language === 'ar';

    const partners = [
        { name: 'Schneider Electric', descEN: 'Global specialist in energy management and automation.', descAR: 'متخصص عالمي في إدارة الطاقة والأتمتة.' },
        { name: 'Caterpillar', descEN: 'Leading manufacturer of construction and mining equipment, diesel engines.', descAR: 'الشركة الرائدة في مجال المعدات ومحركات الديزل.' },
        { name: 'Siemens', descEN: 'Technology company focused on industry, infrastructure, and transport.', descAR: 'شركة تكنولوجيا تركز على الصناعة والبنية التحتية.' },
        { name: 'ABB', descEN: 'Driving the digital transformation of industries.', descAR: 'دفع التحول الرقمي في الصناعات.' },
        { name: 'Cummins', descEN: 'Global power leader designing and manufacturing power solutions.', descAR: 'رائد عالمي في تصميم وتصنيع حلول الطاقة.' },
        { name: 'MTU (Rolls-Royce)', descEN: 'Provider of world-class power and propulsion solutions.', descAR: 'مزود حلول الطاقة والدفع ذات المستوى العالمي.' },
        { name: 'Volvo Penta', descEN: 'Supplier of engines and complete power systems.', descAR: 'مورد محركات وأنظمة طاقة متكاملة.' },
        { name: 'Deep Sea Electronics', descEN: 'Generator control and automation experts.', descAR: 'خبراء التحكم في المولدات الكهربائية.' },
        { name: 'Perkins', descEN: 'One of the world’s leading diesel engine manufacturers.', descAR: 'واحدة من الشركات الرائدة عالمياً في تصنيع محركات الديزل.' },
    ];

    return (
        <Box dir={i18n.dir()} sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', pb: 10 }}>

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
            <Box sx={{ transform: 'translateY(-50%)', position: 'relative', zIndex: 10 }}>
                <Container maxWidth="lg">
                    <Paper elevation={0} sx={{ display: 'inline-flex', px: 4, py: 1.5, borderRadius: 8, bgcolor: alpha('#fff', 0.95), backdropFilter: 'blur(10px)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                        <BreadcrumbsNav />
                    </Paper>
                </Container>
            </Box>

            {/* Main Partners Grid */}
            <Container maxWidth="lg" sx={{ pt: 4 }}>
                <Grid container spacing={4}>
                    {partners.map((partner, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `1px solid ${theme.palette.divider}`, display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)', borderColor: theme.palette.primary.main, boxShadow: `0 12px 30px ${alpha(theme.palette.primary.main, 0.15)}` } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Avatar sx={{ bgcolor: alpha(theme.palette.secondary.main, 0.1), color: theme.palette.secondary.main, width: 56, height: 56, mr: isRTL ? 0 : 2, ml: isRTL ? 2 : 0 }}>
                                            <HandshakeIcon />
                                        </Avatar>
                                        <Typography variant="h5" fontWeight={800} color="text.primary">
                                            {partner.name}
                                        </Typography>
                                    </Box>
                                    <Typography color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7, flexGrow: 1 }}>
                                        {isRTL ? partner.descAR : partner.descEN}
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
