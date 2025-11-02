'use client'
import {ThemeProvider} from "@mui/system";
import './globals.css';
import theme from '../theme';
import MDHeader from "@/app/components/MD-Header";
import MDFooter from "@/app/components/MD-Footer";
import useWindowSize from "@/hooks/useWindowSize";
import ResponsiveHeader from "@/app/components/RespopnsiveHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { width } = useWindowSize();
  return (
    <html lang="en">
      <body className={'bg-base-back w-screen h-screen'}>
          <ThemeProvider theme={theme}>
              {

                  width <= 1100 ? (<ResponsiveHeader />) : (<MDHeader />)
              }
              <div className={'w-full h-auto'}>
                  {children}
              </div>

              <MDFooter />
          </ThemeProvider>
      </body>
    </html>
  );
}
