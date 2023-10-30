import Card from './Card'
import photo1 from '../assets/images-casan/1.webp';
import photo2 from '../assets/images-casan/2.webp';
import photo3 from '../assets/images-casan/3.webp';
import photo4 from '../assets/images-casan/4.webp';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Popular() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="my-5">
      <h3 className="text-2xl font-bold my-3">Popular kosan</h3>
      <div className="w-full h-fit">
        <Carousel responsive={responsive}>
            <Card srcImage={photo1} title="Kosan Haji Alfi" />
            <Card srcImage={photo2} title="Kosan Haji Bilvi" />
            <Card srcImage={photo3} title="Kosan Haji Fahriza" />
            <Card srcImage={photo4} title="Kosan Haji Rafli" />
            <Card srcImage={photo1} title="Kosan Bang Rawas" />
        </Carousel>
      </div>
    </div>
  )
}

export default Popular