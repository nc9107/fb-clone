import "../styles/globals.css";
import { Provider } from "next-auth/client";

// wrapping with provider helps us to get session information in our differnet component.

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      {/* Provider allows us to have a logged in state // throughout the */}
      {/* application */}
    </Provider>
  );
}

export default MyApp;
