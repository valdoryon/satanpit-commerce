import {
  Navbar,
  ImageSlider,
  ClothesCategoryCard,
  Footer,
} from '../../components/components-routes';

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <ImageSlider
        toURL='/search/verano 24'
        rel='preload'
        alt='Band'
        loading='lazy'
        imageURL={'image_background-band.webp'}
      />
      <div className='landing-page__clothes-category-cards'>
        <ClothesCategoryCard
          imageURL={'/image_bassist-player.webp'}
          category='Remeras'
          linkUrl='/search/remeras'
        />

        <ClothesCategoryCard
          imageURL={'/image_model.webp'}
          category='Pantalones'
          linkUrl='/search/pantalones'
        />

        <ClothesCategoryCard
          imageURL={'/image_sweatshirt-model.webp'}
          category='Buzos'
          linkUrl='/search/buzos'
        />
      </div>
      <ImageSlider
        toURL=''
        alt='Discover us'
        rel='preload'
        loading='lazy'
        imageURL='/image_discoverus.webp'
      />
      <Footer />
    </>
  );
};

export default LandingPage;
