'use client';
import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Grid, Typography, Button, useTheme, alpha, Stack, Chip, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';
import { ALL_SERVICES } from '@/lib/servicesData';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

export default function ServicesPage() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === 'ar';

  return (
    <Box>
      {/* ── Hero ── */}
      <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #1a2e10 100%)`, color: '#fff', py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.05)}`, top: -150, right: isRTL ? 'auto' : -100, left: isRTL ? -100 : 'auto' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 4, display: 'block', mb: 2 }}>
              {isRTL ? 'ما نقدمه' : 'What We Offer'}
            </Typography>
            <Typography variant="h2" fontWeight={900} sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              {isRTL ? 'حلول طاقة متكاملة وموثوقة' : 'Integrated & Reliable Power Solutions'}
            </Typography>
            <Typography sx={{ opacity: 0.82, maxWidth: 580, lineHeight: 1.75, fontSize: '1.05rem' }}>
              {isRTL
                ? 'من توريد المولدات إلى الصيانة والاختبار — حلول هندسية مصممة للمواقع الحرجة في المملكة العربية السعودية.'
                : 'From generator supply to maintenance and testing — engineering solutions designed for critical sites across Saudi Arabia.'}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>

      {/* ── Services ── */}
      {ALL_SERVICES.map((svc, index) => {
        const isEven = index % 2 === 0;
        const imgLeft = isRTL ? !isEven : isEven;

        return (
          <Box
            key={svc.slug}
            id={svc.slug}
            sx={{ bgcolor: isEven ? '#fff' : '#f5f7f5', py: { xs: 8, md: 12 }, scrollMarginTop: 80 }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center"
                direction={{ xs: 'column', md: imgLeft ? 'row' : 'row-reverse' }}>

                {/* Image */}
                <Grid item xs={12} md={5}>
                  <Reveal delay={0.05}>
                    <Box sx={{ position: 'relative' }}>
                      <Box sx={{ borderRadius: 3, overflow: 'hidden', height: { xs: 260, md: 400 }, boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
                        <img src={svc.image} alt={isRTL ? svc.titleAR : svc.titleEN}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </Box>
                      {/* Number badge */}
                      <Box sx={{
                        position: 'absolute', top: -16, right: isRTL ? 'auto' : -16, left: isRTL ? -16 : 'auto',
                        width: 56, height: 56, bgcolor: theme.palette.primary.main,
                        borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: 4,
                      }}>
                        <Typography fontWeight={900} sx={{ color: '#fff', fontSize: '1.2rem' }}>
                          {String(index + 1).padStart(2, '0')}
                        </Typography>
                      </Box>
                    </Box>
                  </Reveal>
                </Grid>

                {/* Content */}
                <Grid item xs={12} md={7}>
                  <Reveal delay={0.1}>
                    {/* Tagline */}
                    <Typography sx={{
                      color: theme.palette.primary.main, fontWeight: 800,
                      fontSize: '0.92rem', letterSpacing: 3, textTransform: 'uppercase', mb: 1.5,
                    }}>
                      {isRTL ? svc.taglineAR : svc.taglineEN}
                    </Typography>

                    {/* Title */}
                    <Typography variant="h3" fontWeight={800} sx={{ mb: 1, lineHeight: 1.2, fontSize: { xs: '1.9rem', md: '2.4rem' } }}>
                      {isRTL ? svc.titleAR : svc.titleEN}
                    </Typography>

                    {/* Subtitle */}
                    <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.main, fontWeight: 600, mb: 2 }}>
                      {isRTL ? svc.subtitleAR : svc.subtitleEN}
                    </Typography>

                    <Divider sx={{ mb: 3, borderColor: alpha(theme.palette.primary.main, 0.15) }} />

                    {/* Description */}
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.4 rem' }}>
                      {isRTL ? svc.descAR : svc.descEN}
                    </Typography>

                    {/* Who We Serve */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 1 }}>
                        {isRTL ? 'من نخدم' : 'Who We Serve'}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={0.8}>
                        {svc.whoWeServe.map((item, i) => (
                          <Chip key={i} label={isRTL ? item.ar : item.en} size="small"
                            sx={{ bgcolor: alpha(theme.palette.secondary.main, 0.07), color: theme.palette.secondary.main, fontWeight: 600, fontSize: '1.1rem', border: `1px solid ${alpha(theme.palette.secondary.main, 0.18)}` }} />
                        ))}
                      </Stack>
                    </Box>

                    {/* Key features from first section */}
                    {svc.sections[0] && (
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="caption" sx={{ color: theme.palette.secondary.main, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 1.5 }}>
                          {isRTL ? svc.sections[0].titleAR : svc.sections[0].titleEN}
                        </Typography>
                        <Grid container spacing={1}>
                          {svc.sections[0].items.map((item, fi) => (
                            <Grid item xs={12} sm={6} key={fi}>
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <CheckCircleIcon sx={{ color: theme.palette.primary.main, fontSize: 17, mt: '3px', flexShrink: 0 }} />
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1.3rem' }}>
                                  {isRTL ? item.ar : item.en}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}

                    {/* Callout */}
                    {(svc.calloutEN || svc.calloutAR) && (
                      <Box sx={{ mb: 3, p: 2, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.07), borderLeft: isRTL ? 'none' : `4px solid ${theme.palette.primary.main}`, borderRight: isRTL ? `4px solid ${theme.palette.primary.main}` : 'none' }}>
                        <Typography fontWeight={600} sx={{ color: theme.palette.secondary.main, fontSize: '1.1rem' }}>
                          {isRTL ? svc.calloutAR : svc.calloutEN}
                        </Typography>
                      </Box>
                    )}
                  </Reveal>
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: theme.palette.secondary.main, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Reveal>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 2, color: '#fff' }}>
                {isRTL ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1.05rem', maxWidth: 500, mx: 'auto', color: alpha('#fff', 0.8) }}>
                {isRTL ? 'تواصل معنا اليوم ودعنا نصمم الحل المناسب لاحتياجاتك.' : 'Contact us today and let us design the right solution for your needs.'}
              </Typography>
              <Button component={Link} href="/contact" variant="contained" size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 5, py: 1.6, borderRadius: 1, fontWeight: 700, bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.dark } }}>
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Button>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
