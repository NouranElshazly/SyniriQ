'use client';

import * as React from 'react';
import {
  Container,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  useTheme,
  alpha,
  Grid,
  SvgIcon,
} from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';

const XIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18.244 2H21.556L14.29 10.29L22.855 22H16.115L10.83 14.71L4.945 22H1.63L9.4 13.34L1.145 2H8.06L12.835 8.62L18.244 2ZM17.1 20H18.93L7.12 4H5.156L17.1 20Z" />
  </SvgIcon>
);

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: t('location') || 'Location',
      value: 'Riyadh, Saudi Arabia',
      color: theme.palette.primary.main,
      bgColor: alpha(theme.palette.primary.main, 0.1),
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: t('phone') || 'Phone',
      value: '+966 549 503 824',
      color: theme.palette.secondary.main,
      bgColor: alpha(theme.palette.secondary.main, 0.1),
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: t('email') || 'Email',
      value: 'info@syneriq.com',
      color: theme.palette.primary.dark,
      bgColor: alpha(theme.palette.primary.dark, 0.1),
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: t('workingHours') || 'Working Hours',
      value: 'Sunday – Thursday',
      color: theme.palette.secondary.dark,
      bgColor: alpha(theme.palette.secondary.dark, 0.1),
    },
  ];

  return (
    <Box dir={i18n?.dir()}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 400, md: 500 },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2rem', md: '3.5rem' },
                    color: '#fff',
                    mb: 2,
                  }}
                >
                  {t('contactTitle') || 'Get In Touch'}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: alpha('#fff', 0.9),
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  {t('contactSubtitle') ||
                    "Ready to transform your energy solutions? Let's discuss your project needs."}
                </Typography>

                {/* Social Links */}
                <Stack direction="row" spacing={1}>
                  {[
                    {
                      icon: LinkedInIcon,
                      href: 'https://www.linkedin.com/company/syneriq-energy/',
                      color: '#0077b5',
                    },
                    {
                      icon: InstagramIcon,
                      href: 'https://www.instagram.com/syneriqenergy/',
                      color: '#E4405F',
                    },
                    {
                      icon: XIcon,
                      href: 'https://x.com/syneriqenergy',
                      color: '#000000',
                    },
                  ].map(({ icon: Icon, href, color }) => (
                    <IconButton
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: alpha('#fff', 0.1),
                        color: '#fff',
                        border: `1px solid ${alpha('#fff', 0.2)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: color,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>

      {/* Contact Information Cards */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {contactInfo.map((item, idx) => (
            <Grid item xs={12} sm={6} lg={3} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: `2px solid ${alpha(item.color, 0.3)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 30px ${alpha(item.color, 0.3)}`,
                      borderColor: item.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: item.bgColor,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color={item.color}
                      fontWeight={600}
                      sx={{ mb: 1 }}
                    >
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
