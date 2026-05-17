'use client';
import * as React from 'react';
import Link from 'next/link';
import {
  Box, Container, Grid, Typography,
  useTheme, alpha, Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import BreadcrumbsNav from '@/components/BreadcrumbsNav';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isRTL = i18n.language === 'ar';


  const contactItems = [
    {
      icon: <LocationOnIcon />,
      labelEN: 'Location', labelAR: 'الموقع',
      valueEN: 'Hamad Tower, King Fahd Branch Rd, Al Olaya, Riyadh 12584',
      valueAR: 'برج حمد - طريق الملك فهد الفرعي، العليا، الرياض 12584',
      href: 'https://maps.app.goo.gl/AxQYwbozPpDX1S2V6',
    },
    {
      icon: <EmailIcon />,
      labelEN: 'Email', labelAR: 'البريد الإلكتروني',
      valueEN: 'info@syneriq.com', valueAR: 'info@syneriq.com',
      href: 'mailto:info@syneriq.com',
    },
    {
      icon: <AccessTimeIcon />,
      labelEN: 'Working Hours', labelAR: 'ساعات العمل',
      valueEN: 'Sun – Thu  |  8:00 AM – 5:00 PM', valueAR: 'الأحد – الخميس  |  ٨:٠٠ ص – ٥:٠٠ م',
    },
  ];

  return (
    <Box dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ── Hero ── */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #1a2e10 100%)`,
        color: '#fff', py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden',
      }}>
        <Box sx={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.05)}`, top: -140, right: isRTL ? 'auto' : -80, left: isRTL ? -80 : 'auto' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 4, display: 'block', mb: 2 }}>
              {isRTL ? 'تواصل معنا' : 'Get In Touch'}
            </Typography>
            <Typography variant="h2" fontWeight={900} sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              {isRTL ? 'نحن هنا لمساعدتك' : "We're Here to Help"}
            </Typography>
            <Typography sx={{ opacity: 0.82, maxWidth: 560, lineHeight: 1.75, fontSize: '1.05rem' }}>
              {isRTL
                ? 'سواء كان لديك استفسار أو تحتاج إلى عرض سعر أو تريد مناقشة مشروعك — فريقنا جاهز للرد.'
                : "Whether you have a question, need a quote, or want to discuss your project — our team is ready to respond."}
            </Typography>

            {/* Social */}
            <Box sx={{ mt: 4, display: 'flex', gap: 1.5 }}>
              {[
                { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/syneriq-energy/', color: '#0077b5' },
                { icon: InstagramIcon, href: 'https://www.instagram.com/syneriqenergy/', color: '#E4405F' },
              ].map(({ icon: Icon, href, color }) => (
                <Box key={href} component="a" href={href} target="_blank" rel="noopener noreferrer"
                  sx={{ width: 42, height: 42, borderRadius: '50%', bgcolor: alpha('#fff', 0.1), border: `1px solid ${alpha('#fff', 0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s', '&:hover': { bgcolor: color, borderColor: color } }}>
                  <Icon fontSize="small" />
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <BreadcrumbsNav />
      </Container>

      {/* ── Main Content ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* Contact info cards row */}
          <Grid container spacing={3} sx={{ mb: 8, justifyContent: 'center' }}>
            {contactItems.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper elevation={0} sx={{ p: 4, height: '100%', border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`, borderRadius: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2, transition: 'all 0.3s', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.12)}`, transform: 'translateY(-4px)' } }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                    {React.cloneElement(item.icon as any, { sx: { fontSize: 32 } })}
                  </Box>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.75rem' }}>
                    {isRTL ? item.labelAR : item.labelEN}
                  </Typography>
                  <Typography variant="body1" fontWeight={600} sx={{ mt: 0.5, color: theme.palette.text.primary, textDecoration: 'none' }}
                    {...(item.href ? { component: 'a' as const, href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {isRTL ? item.valueAR : item.valueEN}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Full-width Map */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <Box sx={{ borderRadius: 4, overflow: 'hidden', height: { xs: 400, md: 550 }, boxShadow: '0 8px 40px rgba(0,0,0,0.1)', border: `1px solid ${alpha(theme.palette.divider, 0.1)}` }}>
            <iframe
              src="https://maps.google.com/maps?q=24.6919604,46.682673&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="SyneriQ Location"
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
