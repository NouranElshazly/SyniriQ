// app/components/Nav.tsx
'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar, Toolbar, Box, Button, IconButton, Container, Collapse,
  Menu, MenuItem, useTheme, alpha, Typography, Stack, Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TranslateIcon from '@mui/icons-material/Translate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getDirection } from '@/i18n';
import '@/i18n';

const topLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'servicesNav' },
  { href: '/projects', key: 'projectsNav' },
  { href: '/partners', key: 'partnersTitle' },
  { href: '/contact', key: 'contactTitle' },
];

export default function Nav() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langEl, setLangEl] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isRTL = i18n.language === 'ar';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = getDirection(lng);
    }
    setLangEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* ── Top Bar ── */}
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: '#fff',
            display: { xs: 'none', md: 'block' },
            maxHeight: scrolled ? 0 : 70,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, padding 0.3s ease',
            py: scrolled ? 0 : 1.6,
          }}
        >
          <Container maxWidth="lg">
            <Box dir="ltr" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              {/* Social + phone (left in LTR, right in RTL) */}
              <Stack direction="row" spacing={2} alignItems="center">
                {[
                  { icon: LinkedInIcon, href: 'https://www.linkedin.com/company/syneriq-energy/' },
                  { icon: InstagramIcon, href: 'https://www.instagram.com/syneriqenergy/' },
                ].map(({ icon: Icon, href }) => (
                  <IconButton
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ color: '#fff', p: 0.5, '&:hover': { color: theme.palette.primary.main } }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </IconButton>
                ))}
              </Stack>

              {/* Location + hours (right in LTR, left in RTL) */}
              <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <LocationOnIcon sx={{ fontSize: 18, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.92rem' }}>
                    {t('contact.location')}
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ borderColor: alpha('#fff', 0.3) }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <AccessTimeIcon sx={{ fontSize: 18, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.92rem' }}>
                    {t('contact.hours')} — {t('contact.hoursDetail')}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* ── Main Bar ── */}
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 75 } }}>
          <Container maxWidth="lg"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, px: { xs: 2, sm: 3 } }}
          >
            {/* Logo */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/Syneriq.png"
                alt="SyneriQ"
                style={{ height: 'auto', width: 'auto', maxHeight: 90, minHeight: 90 }}
              />
            </Link>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {topLinks.map(({ href, key }) => (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  sx={{
                    textTransform: 'none',
                    fontWeight: isActive(href) ? 700 : 500,
                    fontSize: '1.15rem',
                    px: 2, py: 1,
                    borderRadius: 2,
                    color: isActive(href) ? theme.palette.primary.main : theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      color: theme.palette.primary.main,
                    },
                  }}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {t(key)}
                </Button>
              ))}



              {/* Lang */}
              <IconButton onClick={(e) => setLangEl(e.currentTarget)} sx={{ ml: 1 }}>
                <TranslateIcon />
              </IconButton>
            </Box>

            {/* Mobile Controls */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton onClick={(e) => setLangEl(e.currentTarget)}>
                <TranslateIcon />
              </IconButton>
              <IconButton onClick={() => setMobileOpen((v) => !v)}>
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Lang Menu */}
      <Menu anchorEl={langEl} open={Boolean(langEl)} onClose={() => setLangEl(null)}>
        <MenuItem onClick={() => changeLanguage('en')}>{t('english')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('ar')}>{t('arabic')}</MenuItem>
      </Menu>

      {/* Mobile Menu */}
      <Collapse in={mobileOpen} unmountOnExit>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.08)}`,
          }}
        >
          <Container maxWidth="lg" sx={{ py: 2, px: { xs: 2, sm: 3 } }}>
            {topLinks.map(({ href, key }) => (
              <Button
                key={href}
                component={Link}
                href={href}
                fullWidth
                color="inherit"
                onClick={() => setMobileOpen(false)}
                sx={{
                  justifyContent: isRTL ? 'flex-end' : 'flex-start',
                  textTransform: 'none',
                  py: 1.5, px: 2, mb: 0.5,
                  borderRadius: 2,
                  fontWeight: isActive(href) ? 700 : 500,
                  color: isActive(href) ? theme.palette.primary.main : theme.palette.text.primary,
                  backgroundColor: isActive(href) ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.06), color: theme.palette.primary.main },
                }}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {t(key)}
              </Button>
            ))}

            {/* Mobile info strip */}
            <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}` }}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeIcon fontSize="small" color="action" />
                  <Typography variant="caption">{t('contact.hours')} — {t('contact.hoursDetail')}</Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Language toggle */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Button onClick={() => { changeLanguage('en'); setMobileOpen(false); }} fullWidth variant="outlined"
                sx={{ textTransform: 'none', fontWeight: 600, py: 1.1, borderRadius: 2 }}>
                {t('english')}
              </Button>
              <Button onClick={() => { changeLanguage('ar'); setMobileOpen(false); }} fullWidth variant="outlined"
                sx={{ textTransform: 'none', fontWeight: 600, py: 1.1, borderRadius: 2 }}>
                {t('arabic')}
              </Button>
            </Box>
          </Container>
        </Box>
      </Collapse>
    </>
  );
}
