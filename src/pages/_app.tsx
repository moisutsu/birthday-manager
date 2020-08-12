import { AppProps } from "next/app";

import "src/css/styles.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
