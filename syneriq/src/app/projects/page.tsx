'use client';
import * as React from 'react';
import { Box, Container, Typography, Grid, Chip, Stack, useTheme, alpha, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
};

/* Photo grid layouts per project */
const PhotoGrid = ({ images }: { images: string[] }) => (
  <Grid container spacing={1} sx={{ mb: 1.5 }}>
    {images.length === 2 && (
      <>
        <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: { xs: 160, md: 220 } }}><img src={images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
        <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: { xs: 160, md: 220 } }}><img src={images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
      </>
    )}
    {images.length === 3 && (
      <>
        <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: { xs: 200, md: 280 } }}><img src={images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
        <Grid item xs={6}>
          <Stack spacing={1} height="100%">
            <Box sx={{ borderRadius: 1.5, overflow: 'hidden', flex: 1 }}><img src={images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></Box>
            <Box sx={{ borderRadius: 1.5, overflow: 'hidden', flex: 1 }}><img src={images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></Box>
          </Stack>
        </Grid>
      </>
    )}
    {images.length >= 4 && (
      <>
        <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: { xs: 200, md: 280 } }}><img src={images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
        <Grid item xs={6}>
          <Stack spacing={1} height="100%">
            <Box sx={{ borderRadius: 1.5, overflow: 'hidden', flex: 1 }}><img src={images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></Box>
            <Grid container spacing={1} sx={{ flex: 1 }}>
              <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: '100%', minHeight: 80 }}><img src={images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
              <Grid item xs={6}><Box sx={{ borderRadius: 1.5, overflow: 'hidden', height: '100%', minHeight: 80 }}><img src={images[3]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box></Grid>
            </Grid>
          </Stack>
        </Grid>
      </>
    )}
  </Grid>
);

export default function ProjectsPage() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === 'ar';

  const projects = [
    {
      kva: '2000 KVA',
      nameEN: 'Saudi German Hospital',
      nameAR: 'المستشفى السعودي الألماني',
      typeEN: 'Installation T&C',
      typeAR: 'تركيب وتشغيل',
      images: ['/EngineeringServices.jpg', '/img1.jpg', '/combine-machine-service.jpg'],
    },
    {
      kva: '1250 KVA',
      nameEN: 'Riyadh Hospital',
      nameAR: 'مستشفى الرياض',
      typeEN: 'Installation & Cladding',
      typeAR: 'تركيب وتكسية',
      images: ['/energy-solutions-1.jpg', '/img2.jpg', '/img3.jpg'],
    },
    {
      kva: '150 KVA',
      nameEN: 'The Nest',
      nameAR: 'ذا نيست',
      typeEN: 'Supply & Installation',
      typeAR: 'توريد وتركيب',
      images: ['/img2.jpg', '/img3.jpg'],
    },
    {
      kva: '2000 KVA',
      nameEN: 'Jizan Municipality',
      nameAR: 'بلدية جازان',
      typeEN: 'Supply & Installation',
      typeAR: 'توريد وتركيب',
      images: ['/combine-machine-service.jpg', '/img1.jpg', '/energy-solutions.png', '/EngineeringServices.jpg'],
    },
    {
      kva: '750 KVA',
      nameEN: 'Skaka Ministry of Justice',
      nameAR: 'وزارة العدل - سكاكا',
      typeEN: 'Supply & Installation',
      typeAR: 'توريد وتركيب',
      images: ['/energy-solutions-1.jpg', '/img3.jpg', '/img2.jpg'],
    },
    {
      kva: '500 KVA',
      nameEN: 'Industrial Facility – Dammam',
      nameAR: 'منشأة صناعية – الدمام',
      typeEN: 'O&M Contract',
      typeAR: 'عقد تشغيل وصيانة',
      images: ['/img1.jpg', '/combine-machine-service.jpg'],
    },
  ];

  const stats = [
    { value: '+500', en: 'Projects Delivered', ar: 'مشروع منجز' },
    { value: '+20', en: 'Years Experience', ar: 'سنة خبرة' },
    { value: '5+', en: 'Sectors Served', ar: 'قطاعات مخدومة' },
    { value: '24/7', en: 'Support', ar: 'دعم متواصل' },
  ];

  return (
    <Box sx={{ bgcolor: '#f4f7f4', minHeight: '100vh' }}>

      {/* Hero */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #2d4a18 100%)`,
        py: { xs: 8, md: 12 }, color: '#fff',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={900} sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
            {isRTL ? 'المشاريع' : 'Projects'}
            <Box component="span" sx={{ color: theme.palette.primary.main }}> & </Box>
            {isRTL ? 'الخبرة' : 'Experience'}
          </Typography>
          <Typography sx={{ color: alpha('#fff', 0.8), maxWidth: 620, lineHeight: 1.8, fontSize: '1.05rem', mb: 1 }}>
            {isRTL
              ? 'نجحنا في تسليم حلول طاقة عبر قطاعات متعددة في المملكة العربية السعودية، ندعم العمليات الحرجة بأنظمة موثوقة وفعالة.'
              : 'We have successfully delivered power solutions across multiple sectors in Saudi Arabia, supporting critical operations with reliable and efficient systems.'}
          </Typography>
          <Typography sx={{ color: alpha('#fff', 0.7), maxWidth: 620, lineHeight: 1.8, fontSize: '1.05rem' }}>
            {isRTL
              ? 'تغطي خبرتنا المشاريع الصناعية والإنشائية والصحية والبنية التحتية، حيث الأداء والاستمرارية أمر ضروري.'
              : 'Our experience covers industrial, construction, healthcare, and infrastructure projects, where performance and uptime are essential.'}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>

      {/* Stats */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Reveal>
          <Grid container spacing={2}>
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box sx={{
                  bgcolor: '#fff', borderRadius: 2, p: 3, textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderTop: `3px solid ${theme.palette.primary.main}`,
                }}>
                  <Typography variant="h4" fontWeight={900} sx={{ color: theme.palette.primary.main }}>{s.value}</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>{isRTL ? s.ar : s.en}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>

      {/* Projects */}
      <Container maxWidth="md" sx={{ pb: { xs: 8, md: 12 } }}>
        <Stack spacing={8}>
          {projects.map((project, i) => (
            <Reveal key={i} delay={0.05}>
              <Box>
                <PhotoGrid images={project.images} />

                {/* Label + divider */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Typography variant="caption" sx={{
                    color: theme.palette.secondary.main, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: 1, whiteSpace: 'nowrap', fontSize: '0.75rem',
                  }}>
                    {isRTL ? project.typeAR : project.typeEN}
                  </Typography>
                  <Box sx={{ flex: 1, height: 2, bgcolor: theme.palette.primary.main, borderRadius: 1 }} />
                </Box>

                {/* Project title */}
                <Typography variant="h4" fontWeight={900} sx={{
                  textAlign: 'center', textTransform: 'uppercase',
                  fontSize: { xs: '1.4rem', md: '1.9rem' },
                  color: theme.palette.text.primary, letterSpacing: 1,
                }}>
                  {project.kva}
                  <Box component="span" sx={{ color: theme.palette.secondary.main }}> – </Box>
                  {isRTL ? project.nameAR : project.nameEN}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>

    </Box>
  );
}
