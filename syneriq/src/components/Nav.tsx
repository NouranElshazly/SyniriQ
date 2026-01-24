// app/components/Nav.tsx

'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AppBar, Toolbar, Box, Button, IconButton, Container, Collapse,
  Menu, MenuItem, useTheme, alpha
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { getDirection } from '@/i18n';
import '@/i18n';

// روابط أساسية
const topLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contactTitle' },
  { href: '/services', key: 'servicesNav' }, // ✅ Fixed "hred" to "href"
];

export default function Nav() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langEl, setLangEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof document !== 'undefined') {
      document.documentElement.dir = getDirection(lng);
    }
    setLangEl(null);
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="sticky" color="inherit" elevation={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
          <Container maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              px: { xs: 2, sm: 3 }
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/Syneriq.png"
                alt="SyneriQ"
                width={600}
                height={600}
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxHeight: 100,
                  minHeight: 100
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {topLinks.map(({ href, key }) => (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  color={isActive(href) ? 'primary' : 'inherit'}
                  sx={{
                    textTransform: 'none',
                    fontWeight: isActive(href) ? 700 : 500,
                    fontSize: '0.95rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    color: isActive(href) ? theme.palette.primary.main : theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      color: theme.palette.primary.main
                    },
                  }}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {t(key)}
                </Button>
              ))}

              {/* CTA */}
              <Button component={Link} href="/contact" variant="contained" color="secondary" sx={{ ml: 2 }}>
                {t('getQuote')}
              </Button>

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
            boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.08)}`
          }}
        >
          <Container maxWidth="lg" sx={{ py: 2, px: { xs: 2, sm: 3 } }}>
            {/* روابط أساسية */}
            {topLinks.map(({ href, key }) => (
              <Button
                key={href}
                component={Link}
                href={href}
                fullWidth
                color="inherit"
                onClick={() => setMobileOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  py: 1.5,
                  px: 2,
                  mb: 0.5,
                  borderRadius: 2,
                  fontWeight: isActive(href) ? 700 : 500,
                  color: isActive(href) ? theme.palette.primary.main : theme.palette.text.primary,
                  backgroundColor: isActive(href) ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.06),
                    color: theme.palette.primary.main
                  },
                }}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {t(key)}
              </Button>
            ))}

            {/* CTA Get Quote */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => setMobileOpen(false)}
              sx={{
                textTransform: 'none',
                fontWeight: 700,
                py: 1.4,
                borderRadius: 2,
                boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.3)}`,
                '&:hover': {
                  boxShadow: `0 6px 16px ${alpha(theme.palette.secondary.main, 0.4)}`
                }
              }}
            >
              {t('getQuote')}
            </Button>

            {/* Language toggle in mobile */}
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button
                onClick={() => { changeLanguage('en'); setMobileOpen(false); }}
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.1,
                  borderRadius: 2
                }}
              >
                {t('english')}
              </Button>
              <Button
                onClick={() => { changeLanguage('ar'); setMobileOpen(false); }}
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.1,
                  borderRadius: 2
                }}
              >
                {t('arabic')}
              </Button>
            </Box>
          </Container>
        </Box>
      </Collapse>
    </>
  );
}
