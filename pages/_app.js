// Global style must be imported here
import '../styles/global.css'

/**
 * Top-level component which will be common across all the different pages
 * We can use this component to keep state when navigating between pages
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
