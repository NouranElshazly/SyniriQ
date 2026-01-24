'use client';
import * as React from 'react';
import {
  Container,
  Typography,
  Divider,
  Paper,
  Link,
  Box,
  Button,
  useTheme
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Pagination } from 'swiper/modules';
import BreadcrumbsNav from '@/components/BreadcrumbsNav'; 
export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const th = useTheme();
  const teamMembers = t('teamMembers', { returnObjects: true, defaultValue: [] }) as any[];

  return (
    <Box dir={i18n.dir()} sx={{ bgcolor: th.palette.background.default }}>
     
      {/* Hero Image */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, md: 500 }, overflow: 'hidden' }}>
        <img
          src="/aboutus.jpg"
          alt="About SyneriQ"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>
      {/* About Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }} maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight={700} color="primary" sx={{ mb: 3 }}>
            {t('aboutTitle')}
          </Typography>
          <Divider sx={{ width: 80, mb: 3, borderColor: 'secondary.main' }} />
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            {t('aboutContent')}
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7,mb:2 }}>
            {t('aboutContent2')}
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 , mb:2}}>
            {t('aboutContent3')}
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7 , mb:2}}>
            {t('aboutContent4')}
          </Typography>
        </motion.div>
      </Container>
  

      {/* CTA */}
<Container
  maxWidth={false}
  sx={{
    py: { xs: 2, md: 8 },
    backgroundColor: 'background.paper',
  }}
>        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight={600} sx={{ mb: 2, color: 'text.secondary' }}>
              {t('ctaTitle')}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              {t('ctaSubtitle')}
            </Typography>
            <Button component={Link} href="/contact" variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>
              {t('getInTouch')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
