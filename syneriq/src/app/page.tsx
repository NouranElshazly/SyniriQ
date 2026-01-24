'use client';

import * as React from 'react';
import { memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Box, 
  Container, 
  Grid, 
  Stack, 
  Typography, 
  Button, 
  Chip, 
  Card,
  CardContent,
  useTheme,
  alpha
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

// Icons
import NatureIcon from '@mui/icons-material/Nature'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SecurityIcon from '@mui/icons-material/Security';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import EnergyIcon from '@mui/icons-material/ElectricBolt';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

// Service Card (Zigzag)
const ServiceCard = ({ service, index }: any) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeInUp}>
      <Card 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
          borderRadius: 3,
          overflow: "hidden",
          mb: 4,
          height: "100%",
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }
        }}
      >
        {/* الصورة */}
        <Box sx={{ flex: 1, minHeight: 250, position: "relative" }}>
          <img
            src={service.image}
            alt={t(service.titleKey) || service.fallbackTitle}
            // style={{ objectFit: "cover" }}
            style={{
              width: "100%",       // العرض يملأ الحاوية
              height: "100%",      // الارتفاع يملأ الحاوية
              objectFit: "cover",  // تغطي كامل الحاوية مع الحفاظ على النسبة
            }}
          />
        </Box>

        {/* المحتوى */}
        <CardContent sx={{ flex: 1, p: 4, display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" fontWeight={700} color={service.color} mb={2}>
            {t(service.titleKey) || service.fallbackTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3} sx={{ flexGrow: 1 }}>
            {t(service.descriptionKey) || service.fallbackDescription}
          </Typography>
         
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Value Props
  const valueProps = useMemo(() => [
    { icon: <SecurityIcon />, titleKey: 'valuesSafety', fallbackTitle: 'Safety First', color: '#32CD32', bgColor: alpha('#32CD32', 0.1) },
    { icon: <HighQualityIcon />, titleKey: 'valuesQuality', fallbackTitle: 'Premium Quality', color: '#3B5323', bgColor: alpha('#3B5323', 0.1) },
    { icon: <NatureIcon />, titleKey: 'valuesSustainability', fallbackTitle: 'Sustainability', color: '#32CD32', bgColor: alpha('#32CD32', 0.1) },
    { icon: <SupportAgentIcon />, titleKey: 'valuesClient', fallbackTitle: 'Client Focus', color: '#3B5323', bgColor: alpha('#3B5323', 0.1) }
  ], []);

  // Services
  const services = useMemo(() => [
    {
      icon: <EngineeringIcon fontSize="large" />,
      titleKey: 'powerTitle',
      fallbackTitle: 'Power & Energy Systems ',
      descriptionKey: 'powerDesc',
      fallbackDescription: 'Smart diesel, hybrid, and renewable power systems delivering reliable energy for every sector.',
      color: '#32CD32',
      image: '/energy-solutions.png',
   
    },
    {
      icon: <EngineeringIcon fontSize="large" />,
      titleKey: 'engServicesTitle',
      fallbackTitle: 'Engineering Services',
      descriptionKey: 'engServicesDesc',
      fallbackDescription: 'Comprehensive engineering solutions for complex energy projects.',
      color: '#32CD32',
      image: '/EngineeringServices.jpg',
     
    },
    {
      icon: <EngineeringIcon fontSize="large" />,
      titleKey: 'operationTitle',
      fallbackTitle: 'Operation & Reliability',
      descriptionKey: 'operationDesc',
      fallbackDescription: 'Long-term O&M, preventive maintenance, and SLA contracts ensuring system reliability and continuity.',
      color: '#32CD32',
      image: '/combine-machine-service.jpg',
   
    }
  
    
  ], []);

  // Gradient Styles
  const gradientStyles = {
    primary: 'linear-gradient(135deg, #32CD32 0%, #3B5323 100%)',
    overlay: 'linear-gradient(to bottom, rgba(50,205,50,0.6) 0%, rgba(59,83,35,0.6) 100%)',
    button: 'linear-gradient(45deg, #32CD32, #3B5323)',
    buttonHover: 'linear-gradient(45deg, #3B5323, #32CD32)'
  };

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          color: '#fff',
          minHeight: { xs: '100vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          background: gradientStyles.primary,
        }}
      >
        {/* Background Image with Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: gradientStyles.overlay, 
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, transparent 100%)',
            }
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }}>
          <AnimatedSection>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={8}>
                <motion.div variants={fadeInUp}>
                  <Stack spacing={4}>
                    <Chip 
                      label={t('heroChip') || 'Leading Energy Solutions Provider'}
                      sx={{ 
                        bgcolor: alpha('#fff', 0.15),
                        color: '#fff',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${alpha('#fff', 0.2)}`,
                        alignSelf: 'flex-start'
                      }}
                    />
                    <Typography variant="h1" fontWeight={900} sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
                      {t('heroTitle') || 'Powering Tomorrow\'s Energy Solutions'}
                    </Typography>
                    <Typography variant="h5" sx={{ color: alpha('#fff', 0.9), maxWidth: 600 }}>
                      {t('heroSubtitle') || 'Innovative engineering and sustainable energy solutions for a better future.'}
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                      <Button component={Link} href="/services" variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                        sx={{ px: 4, py: 1.5, borderRadius: 3, background: gradientStyles.button,
                          '&:hover': { background: gradientStyles.buttonHover } }}>
                        {t('exploreServices') || 'Explore Our Services'}
                      </Button>
                      <Button component={Link} href="/contact" variant="outlined" size="large" startIcon={<PlayArrowIcon />}
                        sx={{ px: 4, py: 1.5, borderRadius: 3, borderColor: '#fff', color: '#fff',
                          '&:hover': { borderColor: '#32CD32', bgcolor: 'rgba(50,205,50,0.1)' } }}>
                        {t('contactUs') || 'Contact Us'}
                      </Button>
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Box>

      {/* VALUE PROPS */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <AnimatedSection>
          <Typography variant="h2" textAlign="center" fontWeight={800} mb={2} color="primary.main">
            {t('whyChooseTitle') || 'Why Choose SyneriQ'}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" mb={8}>
            {t('whyChooseSubtitle') || 'Built on the foundation of excellence and innovation'}
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {valueProps.map((prop, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ height: '100%', borderRadius: 3, textAlign: 'center', p: 4 }}>
                  <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: prop.bgColor, color: prop.color, mx: 'auto', mb: 3,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {prop.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={700}>{t(prop.titleKey) || prop.fallbackTitle}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AnimatedSection>
      </Container>

      {/* SERVICES (Zigzag Layout) */}
      <Box sx={{ bgcolor: '#f9f9f9', py: { xs: 8, md: 12 } }}>
        <Container>
          <AnimatedSection>
            <Typography variant="h2" textAlign="center" fontWeight={800} mb={2}>
              {t('servicesTitle') || 'Our Core Services'}
            </Typography>
            <Typography variant="h6" textAlign="center" color="text.secondary" mb={8}>
              {t('servicesSubtitle') }
            </Typography>
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </AnimatedSection>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: gradientStyles.primary, color: '#fff' }}>
        <Container>
          <AnimatedSection>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" fontWeight={900} mb={2}>
                  {t('ctaTitle') || 'Ready to Start Your Next Project?'}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600 }}>
                  {t('ctaSubtitle') || 'Contact us today and let\'s discuss how we can help you achieve your energy goals.'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={3}>
                  <Button component={Link} href="/contact" variant="contained" size="large" color="secondary" endIcon={<ArrowForwardIcon />}>
                    {t('contactUs') || 'Contact Us'}
                  </Button>
                  <Button component={Link} href="/services" variant="outlined" size="large" sx={{ borderColor: '#fff', color: '#fff' }}>
                    {t('servicesNav') || 'Our Services'}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
};

export default memo(HomePage);
