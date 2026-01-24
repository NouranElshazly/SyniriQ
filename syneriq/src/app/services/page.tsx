'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BreadcrumbsNav from '@/components/BreadcrumbsNav'; 
 
// --- Services config (translation keys + images) ---
// كل المفاتيح بقت تحت common.services.*
const services = [
  {
    slug: 'Power & Energy Systems ',
    titleKey: 'services.power.title',
    descKey: 'services.power.desc',
    image: '/energy-solutions.png',
    featuresKey: 'services.power.features',
  },
  {
    slug: 'engineering-design',
    titleKey: 'services.engineeringDesign.title',
    descKey: 'services.engineeringDesign.desc',
    image: '/EngineeringServices.jpg',
    featuresKey: 'services.engineeringDesign.features',
  },

  {
    slug: 'Operation & Reliability',
    titleKey: 'services.operation.title',
    descKey: 'services.operation.desc',
    image: '/combine-machine-service.jpg',
    featuresKey: 'services.operation.features',
  },
  {
    slug: 'Innovation & Sustainability',
    titleKey: 'services.innov.title',
    descKey: 'services.innov.desc',
    image: '/img1.jpg',
    featuresKey: 'services.innov.features',
  },
  {
    slug: 'Support & Partnerships',
    titleKey: 'services.partner.title',
    descKey: 'services.partner.desc',
    image: '/partners.avif',
    featuresKey: 'services.partner.features',
  },
];

export default function ServicesPage() {
  // هنستخدم namespace واحد: common
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={800} mb={3}>
            {t('services.title')}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
            {t('services.subtitle')}
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>
      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {services.map((service, index) => {
          // بنطلب Array من i18n؛ لو مش موجودة هتكون []
          const featuresRaw = t(service.featuresKey, {
            returnObjects: true,
            defaultValue: [],
          }) as unknown;

          const features = Array.isArray(featuresRaw) ? featuresRaw : [];

          return (
            <Box
              key={service.slug}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                gap: 6,
                alignItems: 'center',
                mb: { xs: 8, md: 12 },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  flex: { xs: 'none', md: '0 0 50%' },
                  width: { xs: '100%', md: '50%' },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: { xs: 240, md: 360 },
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={service.image}
                    alt={String(t(service.titleKey))}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: { xs: 'none', md: '0 0 50%' },
                  width: { xs: '100%', md: '50%' },
                }}
              >
                <Typography variant="h4" fontWeight={700} mb={2} color="primary">
                  {t(service.titleKey)}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={3}>
                  {t(service.descKey)}
                </Typography>

                {/* Features */}
                {features.length > 0 && (
                  <Stack spacing={1.5} mb={3}>
                    {features.map((feature: string, idx: number) => (
                      <Box
                        key={`${service.slug}-feature-${idx}`}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{ color: theme.palette.primary.main, fontSize: 20 }}
                        />
                        <Typography variant="body2" fontWeight={500}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                )}

           
              
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
