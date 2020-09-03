import ImageGallery from 'react-image-gallery';

function MyGallery(props) {
  const {images} = props;
  return (
    <ImageGallery items={images} />
  )
}

export default MyGallery;