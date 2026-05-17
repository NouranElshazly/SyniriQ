import type { Metadata } from 'next';
import './globals.css';
import AppWrapper from '@/AppWrapper';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider, CssBaseline, Hidden } from '@mui/material';
import { theme } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Syneriq',

  description: `SyneriQ delivers smart energy & engineering solutions across Saudi Arabia. 
We provide diesel, hybrid & renewable systems aligned with Vision 2030 — backed by 20+ years of expertise`,
  icons: {
    icon: '/Syneriq.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} suppressHydrationWarning>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppWrapper>
            {/* Navbar */}
            <Nav />

            {/* Main Content */}
            <div
              style={{
                flex: 1,
                width: '100%',
                padding: '0',
                overflowX: 'hidden'

              }}
            >
              {children}
            </div>

            {/* Scroll To Top */}
            <ScrollToTop />

            {/* Footer */}
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
