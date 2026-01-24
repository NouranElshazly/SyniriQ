'use client';
import * as React from 'react';
import { 
  Box, Container, Grid, Typography, Link, IconButton, Divider, Stack, useTheme, alpha 
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SvgIcon } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon'
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Schedule from '@mui/icons-material/Schedule';
const XIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18.244 2H21.556L14.29 10.29L22.855 22H16.115L10.83 14.71L4.945 22H1.63L9.4 13.34L1.145 2H8.06L12.835 8.62L18.244 2ZM17.1 20H18.93L7.12 4H5.156L17.1 20Z" />
  </SvgIcon>
); 
export default function Footer() {
  const theme = useTheme();
  const { t } = useTranslation(); 

  return (
    <Box 
      component="footer"
      sx={{ 
        bgcolor: '#1a2e0f',
        background: 'linear-gradient(135deg, #1a2e0f 0%, #2d4a18 100%)',
        color: 'white',
        
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <img src="/Syneriq.png" alt="SyneriQ" width={240} height={160} style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
              <Typography variant="body1" sx={{ color: alpha('#ffffff', 0.85), lineHeight: 1.6, fontSize: '0.95rem', mb: 3 }}>
                {t('footer.description')}
              </Typography>
              
              {/* Social Media */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600, color: '#ffffff' }}>
                  {t('footer.followUs')}
                </Typography>
                {/* <Stack direction="row" spacing={1}>
                  {[ { icon: LinkedIn, href: 'https://www.linkedin.com/company/syneriq-energy/ '} , {icon:Twitter , href: 'https://x.com/SyneriQEnergy'}]

                    .map(({ icon: Icon, href }, i) => (
                    <IconButton key={i} href={href} sx={{ color: alpha('#ffffff', 0.8), bgcolor: alpha('#ffffff', 0.1), border: `1px solid ${alpha('#ffffff', 0.2)}`, borderRadius: '50%' }}>
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack> */}
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

              </Box>
            </Grid>
            
           {/* Quick Links */}
<Grid item xs={12} sm={6} md={4}>
  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '1.1rem' }}>
    {t('footer.quickLinks')}
  </Typography>

  <Stack spacing={1.5}>
    {[
      { key: 'footer.links.home', href: '/' },
      { key: 'footer.links.about', href: '/about' },
      { key: 'footer.links.services', href: '/services' },
      { key: 'footer.links.projects', href: '/projects' },
      { key: 'footer.links.contact', href: '/contact' },
    ].map(({ key, href }) => (
      <Link
        key={href}
        href={href}
        underline="none"
        sx={{
          color: alpha('#ffffff', 0.8),
          fontSize: '0.95rem',
          display: 'inline-block',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#4caf50',
            transform: 'translateX(4px)',
          },
        }}
      >
        {t(key)}
      </Link>
    ))}
  </Stack>
</Grid>

            
            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '1.1rem' }}>
                {t('footer.contactInfo')}
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <LocationOn sx={{ color: '#4caf50' }} />
                  <Box>
                    <Typography>{t('footer.contact.location')}</Typography>
                    <Typography variant="caption">{t('footer.contact.district')}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Phone sx={{ color: '#4caf50' }} />
                  <Link href={`tel:${t('footer.contact.phone')}`} color="inherit">{t('footer.contact.phone')}</Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Email sx={{ color: '#4caf50' }} />
                  <Link href={`mailto:${t('footer.contact.email')}`} color="inherit">{t('footer.contact.email')}</Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Schedule sx={{ color: '#4caf50' }} />
                  <Box>
                    <Typography>{t('footer.contact.hours')}</Typography>
                    <Typography variant="caption">{t('footer.contact.hoursDetail')}</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        
        {/* Bottom Section */}
        <Divider sx={{ borderColor: alpha('#ffffff', 0.15), mb: 3 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: alpha('#ffffff', 0.7) }}>
            {t('footer.bottom.copyright', { year: new Date().getFullYear() })}
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
}
