"use client";

import React from 'react';
import Carousel from 'react-multi-carousel';
import FullImageCard from '@/components/cards/FullImageCard';

const CarouselSpace = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='container'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass='px-2'
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      partialVisbile={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      <FullImageCard
        description='Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='React Carousel with Server Side Rendering Support – Part 1'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='React Carousel with Server Side Rendering Support – Part 1'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Fixing CSS load order/style.chunk.css incorrect in Nextjs'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='React Carousel with Server Side Rendering Support – Part 2'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='React Carousel with Server Side Rendering Support – Part 1'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='React Carousel with Server Side Rendering Support – Part 1'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
      <FullImageCard
        description='Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.'
        title='w3js.com - web front-end studio'
        image='https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      />
    </Carousel>
  );
};

export default CarouselSpace;
