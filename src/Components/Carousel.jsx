import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Carousel = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (

    <div >
      <AutoplaySlider
        className='rounded-2xl z-0 h-44 md:h-64 lg:h-96'
        play={true}
        cancelOnInteraction={false}
        interval={2000}
      >
        <div data-src='https://cdn.stocksnap.io/img-thumbs/960w/abstract-art_RTNQJLIYO7.jpg' />
        <div data-src='https://cdn.stocksnap.io/img-thumbs/960w/art-wall_FIUFHP2RXS.jpg' />
        <div data-src='https://cdn.stocksnap.io/img-thumbs/960w/colorful-abstract_Z4GTHQC09J.jpg' />
      </AutoplaySlider>
    </div>
  );


};

export default Carousel;