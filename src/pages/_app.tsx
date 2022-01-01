import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStore } from '~/store/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStore.Provider>
      <Component {...pageProps} />
    </GlobalStore.Provider>
  );
}

export default MyApp;
