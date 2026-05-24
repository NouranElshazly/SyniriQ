'use client';
import * as React from 'react';
import Link from 'next/link';
import {
  Box, Container, Grid, Typography, Button, Stack, Chip,
  Divider, Collapse,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';
import { ALL_SERVICES } from '@/lib/servicesData';

/* ─── Brand tokens ─────────────────────────────────────────── */
const PRIMARY   = '#5cb82e';   // logo green (light)
const DARK      = '#1a3a0f';   // logo green (dark)
const PRIMARY_LIGHT = '#eaf5e0'; // very light green bg

/* ─── Reveal animation ─────────────────────────────────────── */
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Main page ────────────────────────────────────────────── */
export default function ServicesPage() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [openSlug, setOpenSlug] = React.useState<string | null>(null);

  const toggle = (slug: string) =>
    setOpenSlug(prev => (prev === slug ? null : slug));

  return (
    <Box>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Box
        sx={{
          bgcolor: DARK,
          color: '#fff',
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative ring */}
        <Box sx={{
          position: 'absolute',
          width: 500, height: 500,
          borderRadius: '50%',
          border: `1px solid rgba(255,255,255,0.06)`,
          top: -150,
          right: isRTL ? 'auto' : -100,
          left:  isRTL ? -100  : 'auto',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography
              variant="overline"
              sx={{ color: PRIMARY, fontWeight: 700, letterSpacing: 4, display: 'block', mb: 2 }}
            >
              {isRTL ? 'ما نقدمه' : 'What We Offer'}
            </Typography>
            <Typography
              variant="h2" fontWeight={900}
              sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}
            >
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

      {/* ── Service Cards ─────────────────────────────────────── */}
      <Box sx={{ bgcolor: '#f5f7f5', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            {ALL_SERVICES.map((svc, index) => {
              const isOpen = openSlug === svc.slug;
              const title  = isRTL ? svc.titleAR    : svc.titleEN;
              const sub    = isRTL ? svc.subtitleAR : svc.subtitleEN;
              const tag    = isRTL ? svc.taglineAR  : svc.taglineEN;
              const desc   = isRTL ? svc.descAR     : svc.descEN;

              return (
                <Reveal key={svc.slug} delay={index * 0.04}>
                  <Box
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: `1px solid`,
                      borderColor: isOpen ? PRIMARY : 'rgba(0,0,0,0.08)',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    {/* ── Top row: image + content ── */}
                    <Grid container>

                      {/* Icon panel */}
                      <Grid
                        item xs={12} md={2}
                        sx={{
                          bgcolor: PRIMARY_LIGHT,
                          minHeight: { xs: 100, md: 'auto' },
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 2,
                          p: 3,
                        }}
                      >
                        {/* Number badge */}
                        <Typography fontWeight={900} sx={{
                          color: PRIMARY, fontSize: '0.78rem',
                          letterSpacing: 2, opacity: 0.7,
                        }}>
                          {String(index + 1).padStart(2, '0')}
                        </Typography>

                        {/* Icon */}
                        <Box sx={{
                          width: 72, height: 72,
                          borderRadius: '50%',
                          bgcolor: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: `0 4px 20px rgba(92,184,46,0.15)`,
                          color: PRIMARY,
                          '& svg': { fontSize: 34 },
                        }}>
                          {svc.icon}
                        </Box>
                      </Grid>

                      {/* Content */}
                      <Grid item xs={12} md={10} sx={{ p: { xs: 2.5, md: 3.5 } }}>

                        {/* Tagline */}
                        <Typography sx={{
                          color: PRIMARY, fontWeight: 800,
                          fontSize: '0.78rem', letterSpacing: 3,
                          textTransform: 'uppercase', mb: 1,
                        }}>
                          {tag}
                        </Typography>

                        {/* Title */}
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 0.5, lineHeight: 1.2 }}>
                          {title}
                        </Typography>

                        {/* Subtitle */}
                        <Typography variant="subtitle2" sx={{ color: DARK, fontWeight: 600, mb: 2 }}>
                          {sub}
                        </Typography>

                        <Divider sx={{ mb: 2.5, borderColor: 'rgba(0,0,0,0.07)' }} />

                        {/* Description */}
                        <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 2.5 }}>
                          {desc}
                        </Typography>

                        {/* Who We Serve */}
                        <Box sx={{ mb: 2.5 }}>
                          <Typography variant="caption" sx={{
                            color: DARK, fontWeight: 700, letterSpacing: 2,
                            textTransform: 'uppercase', display: 'block', mb: 1,
                          }}>
                            {isRTL ? 'من نخدم' : 'Who We Serve'}
                          </Typography>
                          <Stack direction="row" flexWrap="wrap" gap={0.8}>
                            {svc.whoWeServe.map((item, i) => (
                              <Chip
                                key={i}
                                label={isRTL ? item.ar : item.en}
                                size="small"
                                sx={{
                                  bgcolor: PRIMARY_LIGHT,
                                  color: DARK,
                                  fontWeight: 600,
                                  fontSize: '0.78rem',
                                  border: `1px solid rgba(92,184,46,0.3)`,
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>

                        {/* Key features — first section */}
                        {svc.sections[0] && (
                          <Box sx={{ mb: 2.5 }}>
                            <Typography variant="caption" sx={{
                              color: DARK, fontWeight: 700, letterSpacing: 2,
                              textTransform: 'uppercase', display: 'block', mb: 1.5,
                            }}>
                              {isRTL ? svc.sections[0].titleAR : svc.sections[0].titleEN}
                            </Typography>
                            <Grid container spacing={1}>
                              {svc.sections[0].items.map((item, fi) => (
                                <Grid item xs={12} sm={6} key={fi}>
                                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                    <CheckCircleIcon sx={{ color: PRIMARY, fontSize: 16, mt: '3px', flexShrink: 0 }} />
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
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
                          <Box sx={{
                            p: 2, borderRadius: 2,
                            bgcolor: PRIMARY_LIGHT,
                            borderLeft:  isRTL ? 'none' : `4px solid ${PRIMARY}`,
                            borderRight: isRTL ? `4px solid ${PRIMARY}` : 'none',
                          }}>
                            <Typography fontWeight={600} sx={{ color: DARK, fontSize: '0.95rem' }}>
                              {isRTL ? svc.calloutAR : svc.calloutEN}
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                    </Grid>

                    {/* ── Expanded: extra sections ── */}
                    <Collapse in={isOpen} timeout={320}>
                      <Box sx={{ borderTop: `1px solid rgba(0,0,0,0.07)`, p: { xs: 2.5, md: 3.5 } }}>
                        <Grid container spacing={2}>
                          {svc.sections.slice(1).map((sec, si) => (
                            <Grid item xs={12} sm={6} key={si}>
                              <Box sx={{
                                bgcolor: '#f5f7f5', borderRadius: 2, p: 2,
                                height: '100%',
                              }}>
                                <Typography fontWeight={700} sx={{ color: DARK, fontSize: '0.82rem', letterSpacing: 1.5, textTransform: 'uppercase', mb: 1.2 }}>
                                  {isRTL ? sec.titleAR : sec.titleEN}
                                </Typography>
                                <Stack spacing={0.6}>
                                  {sec.items.map((item, ii) => (
                                    <Box key={ii} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                      <CheckCircleIcon sx={{ color: PRIMARY, fontSize: 15, mt: '3px', flexShrink: 0 }} />
                                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                                        {isRTL ? item.ar : item.en}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Stack>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>

                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button
                            component={Link}
                            href="/contact"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              bgcolor: PRIMARY,
                              color: '#fff',
                              fontWeight: 700,
                              px: 4, py: 1.2,
                              borderRadius: 1,
                              '&:hover': { bgcolor: '#4aa824' },
                            }}
                          >
                            {isRTL ? 'تواصل معنا' : 'Contact Us'}
                          </Button>
                        </Box>
                      </Box>
                    </Collapse>

                    {/* ── Footer: expand button ── */}
                    <Box
                      onClick={() => toggle(svc.slug)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: 2.5, md: 3.5 },
                        py: 1.4,
                        bgcolor: '#f9faf8',
                        borderTop: `1px solid rgba(0,0,0,0.06)`,
                        cursor: 'pointer',
                        userSelect: 'none',
                        '&:hover': { bgcolor: PRIMARY_LIGHT },
                        transition: 'background 0.15s',
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight={700}
                        sx={{ color: PRIMARY, display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        {isOpen
                          ? (isRTL ? 'إخفاء التفاصيل' : 'Show less')
                          : (isRTL ? 'عرض التفاصيل كاملة' : 'View full details')}
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: 18,
                            transition: 'transform 0.25s',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        />
                      </Typography>

                      <Typography variant="caption" color="text.disabled">
                        {svc.sections.length > 1
                          ? `${svc.sections.length - 1} ${isRTL ? 'أقسام إضافية' : 'more sections'}`
                          : ''}
                      </Typography>
                    </Box>
                  </Box>
                </Reveal>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <Box sx={{ bgcolor: DARK, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Reveal>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 2, color: '#fff' }}>
                {isRTL ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </Typography>
              <Typography sx={{ mb: 4, fontSize: '1.05rem', maxWidth: 500, mx: 'auto', color: 'rgba(255,255,255,0.75)' }}>
                {isRTL
                  ? 'تواصل معنا اليوم ودعنا نصمم الحل المناسب لاحتياجاتك.'
                  : 'Contact us today and let us design the right solution for your needs.'}
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 5, py: 1.6,
                  borderRadius: 1,
                  fontWeight: 700,
                  bgcolor: PRIMARY,
                  '&:hover': { bgcolor: '#4aa824' },
                }}
              >
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Button>
            </Box>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}