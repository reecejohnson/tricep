import '../styles/style.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      once: true,
      disable: 'phone',
      useClassNames: true,
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    window.addEventListener('load', AOS.refresh);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
