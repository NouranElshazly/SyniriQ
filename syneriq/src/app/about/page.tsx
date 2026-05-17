'use client';
import * as React from 'react';
import {
  Container, Typography, Box, Grid, useTheme, alpha, Button, Paper
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';
import Link from 'next/link';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TimerIcon from '@mui/icons-material/Timer';
import PublicIcon from '@mui/icons-material/Public';
import ShieldIcon from '@mui/icons-material/Shield';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === 'ar';

  const stats = [
    { icon: <TimerIcon sx={{ fontSize: 36 }} />, title: '24/7 Support', desc: 'Reliable field support across Saudi Arabia', titleAR: 'دعم 24/7', descAR: 'دعم ميداني موثوق في جميع أنحاء السعودية' },
    { icon: <PublicIcon sx={{ fontSize: 36 }} />, title: 'KSA Coverage', desc: 'Serving projects across the Kingdom', titleAR: 'تغطية المملكة', descAR: 'نخدم المشاريع في كافة أنحاء المملكة' },
    { icon: <EngineeringIcon sx={{ fontSize: 36 }} />, title: 'End-to-End', desc: 'From design & supply to installation', titleAR: 'حلول متكاملة', descAR: 'من التصميم والتوريد إلى التركيب' },
  ];

  const values = [
    { icon: <ShieldIcon sx={{ fontSize: 40 }} />, title: 'Reliability', desc: 'Consistent and dependable performance in every project', titleAR: 'الموثوقية', descAR: 'أداء ثابت ومضمون في كل مشروع' },
    { icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />, title: 'Professional Execution', desc: 'High-quality delivery with attention to detail', titleAR: 'الاحترافية في التنفيذ', descAR: 'تسليم عالي الجودة مع الاهتمام بأدق التفاصيل' },
    { icon: <SpeedIcon sx={{ fontSize: 40 }} />, title: 'Responsiveness', desc: 'Fast and effective support whenever needed', titleAR: 'سرعة الاستجابة', descAR: 'دعم سريع وفعال عند الحاجة' },
    { icon: <HandshakeIcon sx={{ fontSize: 40 }} />, title: 'Customer Commitment', desc: 'Long-term partnerships built on trust and results', titleAR: 'الالتزام تجاه العميل', descAR: 'شراكات طويلة الأمد مبنية على الثقة والنتائج' },
  ];

  return (
    <Box dir={i18n.dir()} sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', pb: 10, overflowX: 'hidden' }}>

      {/* Hero Header */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #1a2e10 100%)`,
        color: '#fff',
        height: { xs: 280, md: 450 },
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center'
      }}>
        {/* Animated Generator Pattern Overlay */}
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
              {isRTL ? 'تعرف علينا' : 'Discover'}
            </Typography>
            <Typography variant="h2" fontWeight={900} sx={{ color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' }, mb: 1, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {t('aboutTitle')}
            </Typography>
            <Typography variant="h6" sx={{ color: alpha('#fff', 0.9), fontWeight: 400, maxWidth: 600 }}>
              {isRTL ? 'خبراء في هندسة حلول الطاقة المتكاملة' : 'Experts in Engineering Integrated Power Solutions'}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Standard Breadcrumbs */}
      <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
        <BreadcrumbsNav />
      </Container>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ pt: 2, pb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: isRTL ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Box sx={{ borderLeft: isRTL ? 'none' : `6px solid ${theme.palette.primary.main}`, borderRight: isRTL ? `6px solid ${theme.palette.primary.main}` : 'none', pl: isRTL ? 0 : 3, pr: isRTL ? 3 : 0 }}>
                <Typography variant="h3" fontWeight={800} sx={{ color: theme.palette.text.primary, mb: 2, lineHeight: 1.3 }}>
                  {isRTL ? 'خبراء في هندسة حلول الطاقة المتكاملة' : 'Experts in Engineering Integrated Power Solutions'}
                </Typography>
              </Box>
              <Typography variant="h6" fontWeight={700} sx={{ color: theme.palette.secondary.main, mt: 4 }}>
                {isRTL
                  ? 'في SyneriQ، ندعم العمليات التي لا يقبل فيها أي توقف.'
                  : 'We support operations where downtime is not an option.'}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, x: isRTL ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {[t('aboutContent'), t('aboutContent2'), t('aboutContent3'), t('aboutContent4')].map((text, i) => (
                <Typography key={i} color="text.secondary" sx={{ fontSize: '1.15rem', lineHeight: 1.8, mb: 3, fontWeight: 500 }}>
                  {text}
                </Typography>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>


      {/* Core Advantages (Stats Cards) */}
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 10, borderBottom: `1px solid ${theme.palette.divider}`, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: '#f4f6f8', transition: 'all 0.3s ease', '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.05), transform: 'translateY(-5px)' } }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{stat.icon}</Box>
                    <Typography variant="h5" fontWeight={800} sx={{ mb: 1, color: theme.palette.text.primary }}>
                      {isRTL ? stat.titleAR : stat.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {isRTL ? stat.descAR : stat.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Vision & Mission High Impact Cards */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <Paper elevation={0} sx={{ position: 'relative', overflow: 'hidden', p: { xs: 4, md: 6 }, height: '100%', borderRadius: 4, bgcolor: theme.palette.secondary.main, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ position: 'absolute', top: -30, right: -30, opacity: 0.08, transform: 'scale(1.5)' }}><PublicIcon sx={{ fontSize: 200 }} /></Box>
                <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700, mb: 1, display: 'block', color: theme.palette.primary.main }}>{isRTL ? 'طموحنا' : 'OUR AMBITION'}</Typography>
                <Typography variant="h2" fontWeight={800} sx={{ mb: 3 }}>{isRTL ? 'الرؤية' : 'VISION'}</Typography>
                <Typography sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: alpha('#fff', 0.9) }}>
                  {isRTL
                    ? 'أن نكون الشريك الموثوق في تقديم حلول طاقة عملية ومتكاملة للعمليات الحرجة في جميع أنحاء المملكة.'
                    : 'To be a trusted partner in delivering reliable and integrated power solutions for critical operations across Saudi Arabia.'}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Paper elevation={0} sx={{ position: 'relative', overflow: 'hidden', p: { xs: 4, md: 6 }, height: '100%', borderRadius: 4, bgcolor: theme.palette.primary.main, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ position: 'absolute', bottom: -30, right: -30, opacity: 0.1, transform: 'scale(1.5)' }}><SpeedIcon sx={{ fontSize: 200 }} /></Box>
                <Typography variant="overline" sx={{ letterSpacing: 2, fontWeight: 700, mb: 1, display: 'block', color: '#131e11' }}>{isRTL ? 'هدفنا' : 'OUR OBJECTIVE'}</Typography>
                <Typography variant="h2" fontWeight={800} sx={{ mb: 3 }}>{isRTL ? 'الرسالة' : 'MISSION'}</Typography>
                <Typography sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: alpha('#fff', 0.95) }}>
                  {isRTL
                    ? 'تقديم حلول طاقة عملية، كفؤة، وموثوقة تضمن استمرارية بلا انقطاع وأداء طويل الأمد لعملائنا.'
                    : 'To deliver practical, efficient, and reliable power solutions that ensure uninterrupted operations and long-term performance for our clients.'}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>


      {/* Core Values Clean Grid */}
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 15 }, pb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 800, letterSpacing: 2 }}>
            {isRTL ? 'مبادئنا' : 'Our Principles'}
          </Typography>
          <Typography variant="h3" fontWeight={900} sx={{ color: theme.palette.text.primary, mt: 1 }}>
            {isRTL ? 'القيم الأساسية' : 'Core Values'}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((v, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `1px solid ${theme.palette.divider}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`, borderColor: theme.palette.primary.main, transform: 'translateY(-10px)' } }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    {v.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={800} sx={{ color: theme.palette.text.primary, mb: 1.5 }}>
                    {isRTL ? v.titleAR : v.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1.6 }}>
                    {isRTL ? v.descAR : v.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dynamic CTA */}
      <Container maxWidth="md" sx={{ mt: 5, mb: 10, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <Paper elevation={0} sx={{ bgcolor: theme.palette.secondary.dark, color: '#fff', py: 8, px: 4, borderRadius: 6, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'url(/aboutus_dark_pattern.png)', opacity: 0.1, backgroundSize: 'cover' }} />
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
                {t('ctaTitle')}
              </Typography>
              <Typography sx={{ color: alpha('#fff', 0.8), mb: 4, fontSize: '1.25rem', maxWidth: 600, mx: 'auto' }}>
                {t('ctaSubtitle')}
              </Typography>
              <Button component={Link} href="/contact" variant="contained" size="large" sx={{ py: 2, px: 6, borderRadius: 50, fontWeight: 800, fontSize: '1.2rem', textTransform: 'none', bgcolor: theme.palette.primary.main, color: '#fff', '&:hover': { bgcolor: theme.palette.primary.dark, transform: 'scale(1.05)' }, transition: 'all 0.3s' }}>
                {t('getInTouch')}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>

    </Box>
  );
}
