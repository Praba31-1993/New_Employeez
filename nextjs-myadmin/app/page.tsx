// page.tsx
"use client"; // Add this directive to make it a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ColorProvider } from './ColorContext/page';
// import { useColor } from '../ColorContext/page';
export default function Home() {
  const router = useRouter();
  // {Component, pageProps }: AppProps
{/* <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider> */}
  useEffect(() => {
    router.replace('./logincomponent'); // Redirect to the Login page
  }, [router]);

  return null; 
}