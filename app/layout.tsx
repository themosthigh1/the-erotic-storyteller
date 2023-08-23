import './globals.css'
import theme  from "./theme/theme";

import { CssBaseline, ThemeProvider } from '@/components/GlobalWrapper';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';



export default function MainLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
              <NavBar/>
                {children}
              <Footer/>
          </body>
        </ThemeProvider>
    </html>
  )
}
