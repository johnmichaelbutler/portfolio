import '../public/styles.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
