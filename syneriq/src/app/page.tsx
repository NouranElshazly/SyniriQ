'use client';
import * as React from 'react';
import { memo } from 'react';
import Link from 'next/link';
import {
  Box, Container, Grid, Stack, Typography, Button, useTheme, alpha,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import PowerIcon from '@mui/icons-material/Power';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SpeedIcon from '@mui/icons-material/Speed';
import BoltIcon from '@mui/icons-material/Bolt';
import PartnersSection from '@/components/PartnersSection';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

/* ── Main Page ── */
const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === 'ar';

  const services = [
    { icon: <ElectricBoltIcon />, titleEN: 'Diesel Power Solutions', titleAR: 'حلول الطاقة بالديزل', image: '/energy-solutions.png' },
    { icon: <EngineeringIcon />, titleEN: 'Installation & Commissioning', titleAR: 'التركيب والتشغيل', image: '/EngineeringServices.jpg' },
    { icon: <BuildIcon />, titleEN: 'Maintenance & Service', titleAR: 'الصيانة والخدمة', image: '/combine-machine-service.jpg' },
    { icon: <PowerIcon />, titleEN: 'Rental Power', titleAR: 'الطاقة الإيجارية', image: '/img1.jpg' },
    { icon: <SpeedIcon />, titleEN: 'Load Bank Testing', titleAR: 'اختبار بنك الحمل', image: '/img2.jpg' },
    { icon: <BoltIcon />, titleEN: 'UPS & Power Continuity', titleAR: 'UPS واستمرارية الطاقة', image: '/img3.jpg' },
  ];

  const whoWeArePoints = [
    { icon: <EngineeringIcon sx={{ fontSize: 28 }} />, en: 'Engineering First Approach', ar: 'نهج هندسي أولاً', descEN: 'Practical solutions based on real site requirements.', descAR: 'حلول عملية مبنية على متطلبات الموقع الفعلية.' },
    { icon: <BuildIcon sx={{ fontSize: 28 }} />, en: 'Strong Field Experience', ar: 'خبرة ميدانية قوية', descEN: 'Hands-on experience in complex industrial projects.', descAR: 'خبرة عملية في المشاريع الصناعية والإنشائية.' },
    { icon: <SpeedIcon sx={{ fontSize: 28 }} />, en: 'Fast Response Across KSA', ar: 'استجابة سريعة في المملكة', descEN: 'Quick mobilization and support whenever needed.', descAR: 'تعبئة سريعة ودعم في جميع أنحاء المملكة متى لزم الأمر.' },
    { icon: <HandshakeIcon sx={{ fontSize: 28 }} />, en: 'Customer-Focused Partners', ar: 'نهج يركز على شريكنا العميل', descEN: 'We act as strategic partners, not just suppliers.', descAR: 'نعمل كشركاء استراتيجيين، لا مجرد موردين.' },
  ];

  const stats = [
    { value: '+20', en: 'Years Experience', ar: 'سنة خبرة' },
    { value: '+500', en: 'Completed Projects', ar: 'مشروع منجز' },
    { value: '24/7', en: 'Support', ar: 'دعم متواصل' },
    { value: '100%', en: 'KSA Based', ar: 'داخل المملكة' },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>

      {/* 1. ══ HERO ══ */}
      <Box sx={{ position: 'relative', minHeight: { xs: '100vh', md: '88vh' }, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        {/* Mobile: full bg image */}
        <Box sx={{
          display: { xs: 'block', md: 'none' },
          position: 'absolute', inset: 0,
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: 'cover', backgroundPosition: 'center',
          '&::after': {
            content: '""', position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(27,60,20,0.88) 0%, rgba(27,60,20,0.6) 100%)',
          },
        }} />

        {/* Desktop: light bg */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', inset: 0, bgcolor: '#f0f4f0' }} />

        {/* Desktop: diagonal image */}
        <Box sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0,
          right: isRTL ? 'auto' : 0, left: isRTL ? 0 : 'auto',
          width: '50%', height: '100%',
          clipPath: isRTL ? 'polygon(0 0, 88% 0, 100% 100%, 0% 100%)' : 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
          overflow: 'hidden',
        }}>
          <img src="/hero.jpg" alt="hero" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <Box sx={{ position: 'absolute', inset: 0, background: isRTL ? 'linear-gradient(to left, rgba(240,244,240,0.5) 0%, transparent 40%)' : 'linear-gradient(to right, rgba(240,244,240,0.5) 0%, transparent 40%)' }} />
        </Box>

        {/* Desktop: green diagonal accent */}
        <Box sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0,
          right: isRTL ? 'auto' : '45%', left: isRTL ? '45%' : 'auto',
          width: 55, height: '100%',
          bgcolor: theme.palette.primary.main,
          clipPath: isRTL ? 'polygon(0 0, 60% 0, 100% 100%, 40% 100%)' : 'polygon(40% 0, 100% 0, 60% 100%, 0% 100%)',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 12, md: 12 } }}>
          <Grid container justifyContent={isRTL ? 'flex-end' : 'flex-start'}>
            <Grid item xs={12} md={6} sx={{ ml: isRTL ? 'auto' : 0, mr: isRTL ? 0 : 'auto' }}>
              <Reveal>
                <Typography variant="overline" sx={{
                  color: { xs: alpha(theme.palette.primary.light, 0.9), md: theme.palette.primary.main },
                  fontWeight: 700, letterSpacing: 3, display: 'block', mb: 2,
                }}>
                  {isRTL ? 'حلول الطاقة والهندسة' : 'Energy & Engineering Solutions'}
                </Typography>
                <Typography variant="h1" fontWeight={900} sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.6rem' },
                  lineHeight: 1.15, mb: 3,
                  color: { xs: '#fff', md: theme.palette.text.primary },
                }}>
                  {t('heroTitle')}
                </Typography>
                <Typography sx={{
                  fontSize: '1.05rem', lineHeight: 1.75, mb: 5, maxWidth: 480,
                  color: { xs: alpha('#fff', 0.85), md: theme.palette.text.secondary },
                }}>
                  {t('heroSubtitle')}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button component={Link} href="/services" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                    sx={{ px: 4, py: 1.6, borderRadius: 1, fontWeight: 700, bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.dark } }}>
                    {t('exploreServices')}
                  </Button>
                  <Button component={Link} href="/contact" variant="outlined" size="large"
                    sx={{
                      px: 4, py: 1.6, borderRadius: 1, fontWeight: 600,
                      borderColor: { xs: alpha('#fff', 0.7), md: theme.palette.secondary.main },
                      color: { xs: '#fff', md: theme.palette.secondary.main },
                      '&:hover': { bgcolor: { xs: alpha('#fff', 0.1), md: alpha(theme.palette.secondary.main, 0.06) } },
                    }}>
                    {t('contactUs')}
                  </Button>
                </Stack>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. ══ SERVICES GRID ══ */}
      <Box sx={{ bgcolor: '#f5f7f5', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: 'center', mb: 7 }}>
              <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 3 }}>
                {isRTL ? 'ما نقدمه' : 'What We Do'}
              </Typography>
              <Typography variant="h3" fontWeight={800} sx={{ mt: 1, mb: 2 }}>
                {isRTL ? 'نطور حلولاً شاملة لكل مشروع' : 'Develop comprehensive solutions for each project'}
              </Typography>
            </Box>
          </Reveal>
          <Grid container spacing={3}>
            {services.map((svc, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Reveal delay={i * 0.07}>
                  <Box sx={{
                    position: 'relative', borderRadius: 2, overflow: 'hidden', height: 240, cursor: 'pointer',
                    '&:hover .overlay': { opacity: 1 },
                    '&:hover img': { transform: 'scale(1.06)' },
                  }}>
                    <img src={svc.image} alt={isRTL ? svc.titleAR : svc.titleEN}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }} />
                    <Box sx={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                      p: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                    }}>
                      <Typography fontWeight={700} sx={{ color: '#fff', fontSize: '0.95rem' }}>
                        {isRTL ? svc.titleAR : svc.titleEN}
                      </Typography>
                      <Box sx={{ bgcolor: theme.palette.primary.main, borderRadius: 1, p: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        {svc.icon}
                      </Box>
                    </Box>
                    <Box className="overlay" sx={{
                      position: 'absolute', inset: 0, opacity: 0, transition: 'opacity 0.3s',
                      bgcolor: alpha(theme.palette.secondary.main, 0.85),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Button component={Link} href="/services" variant="outlined"
                        sx={{ borderColor: '#fff', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: alpha('#fff', 0.15) } }}>
                        {isRTL ? 'اعرف أكثر' : 'Learn More'}
                      </Button>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. ══ PARTNERS MARQUEE ══ */}
      <PartnersSection />

      {/* 4. ══ MERGED WHO WE ARE & WHY CHOOSE US ══ */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={5}>
              <Reveal>
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ borderRadius: 3, overflow: 'hidden', height: { xs: 360, md: 540 } }}>
                    <img src="/aboutus.jpg" alt="About SyneriQ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{
                    position: 'absolute', bottom: -20,
                    right: isRTL ? 'auto' : -20, left: isRTL ? -20 : 'auto',
                    bgcolor: theme.palette.primary.main, borderRadius: 2, px: 3, py: 2, boxShadow: 4,
                  }}>
                    <Typography variant="h4" fontWeight={900} sx={{ color: '#fff', lineHeight: 1 }}>+20</Typography>
                    <Typography variant="caption" sx={{ color: alpha('#fff', 0.85) }}>{isRTL ? 'سنة خبرة متخصصة' : 'Years Experience'}</Typography>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
            <Grid item xs={12} md={7}>
              <Reveal delay={0.1}>
                <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: 3 }}>
                  {isRTL ? 'من نحن ولماذا تختارنا' : 'Who We Are & Why Choose Us'}
                </Typography>
                <Typography variant="h3" fontWeight={800} sx={{ mt: 1, mb: 3, lineHeight: 1.25 }}>
                  {isRTL ? 'حلول هندسية متكاملة تركز على المستقبل' : 'Engineering Solutions Focused on the Future'}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 5, fontSize: '1.05rem' }}>{t('aboutContent')}</Typography>

                {/* Replaced standard check list with detailed Why Choose us features block */}
                <Grid container spacing={3} sx={{ mb: 5 }}>
                  {whoWeArePoints.map((p, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={{ mt: 0.5, color: theme.palette.primary.main }}>
                          {p.icon}
                        </Box>
                        <Box>
                          <Typography fontWeight={700} sx={{ mb: 0.5, color: theme.palette.text.primary }}>
                            {isRTL ? p.ar : p.en}
                          </Typography>
                          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}>
                            {isRTL ? p.descAR : p.descEN}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Button component={Link} href="/about" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.4, borderRadius: 1, fontWeight: 700, bgcolor: theme.palette.primary.main }}>
                  {isRTL ? 'اعرف أكثر عن شركتنا' : 'Learn More About Us'}
                </Button>
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. ══ STATS BAR ══ */}
      <Box sx={{ bgcolor: theme.palette.secondary.main, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5}>
              <Reveal>
                <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 3 }}>
                  {isRTL ? 'الأرقام تتحدث' : 'Numbers Talk'}
                </Typography>
                <Typography variant="h3" fontWeight={800} sx={{ color: '#fff', mt: 1, lineHeight: 1.3 }}>
                  {isRTL ? 'سينيرك ستساعدك في إنجاز مشروعك بشكل موثوق.' : 'SyneriQ will help you get things complete reality.'}
                </Typography>
              </Reveal>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                {stats.map((s, i) => (
                  <Grid item xs={6} md={3} key={i}>
                    <Reveal delay={i * 0.08}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" fontWeight={900} sx={{ color: theme.palette.primary.main }}>{s.value}</Typography>
                        <Typography sx={{ color: alpha('#fff', 0.75), fontSize: '0.9rem' }}>{isRTL ? s.ar : s.en}</Typography>
                      </Box>
                    </Reveal>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. ══ CTA ══ */}
      <Box sx={{ bgcolor: '#f5f7f5', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Reveal>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 3 }}>
                {isRTL ? 'ابدأ الآن' : 'Get Started'}
              </Typography>
              <Typography variant="h3" fontWeight={800} sx={{ mt: 1, mb: 2 }}>{t('ctaTitle')}</Typography>
              <Typography color="text.secondary" sx={{ mb: 5, fontSize: '1.05rem', maxWidth: 520, mx: 'auto' }}>{t('ctaSubtitle')}</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                  sx={{ px: 5, py: 1.6, borderRadius: 1, fontWeight: 700, bgcolor: theme.palette.primary.main }}>
                  {t('contactUs')}
                </Button>
                <Button component={Link} href="/services" variant="outlined" size="large"
                  sx={{ px: 5, py: 1.6, borderRadius: 1, fontWeight: 600, borderColor: theme.palette.secondary.main, color: theme.palette.secondary.main }}>
                  {t('servicesNav')}
                </Button>
              </Stack>
            </Box>
          </Reveal>
        </Container>
      </Box>

    </Box>
  );
};

export default memo(HomePage);
