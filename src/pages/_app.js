import Layout from './layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>      
      <ToastContainer position="top-right" autoClose={5000} />
      <Component {...pageProps} />
    </Layout>
  );
}
