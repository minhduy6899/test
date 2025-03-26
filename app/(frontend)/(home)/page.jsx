import CarouselSpace from '@/components/pages/home/CarouselSpace';
import HomeSlider from '@/components/pages/home/HomeSlider';
import Reveal from '@/components/share/Reveal';
import { Box, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Box sx={{ maxWidth: '100vw', width: ' 100%' }}>
      <HomeSlider />
      <section className='px-4 lg:px-[100px] my-[100px]'>
        <Reveal>
          <h2 className='mb-3 hover:text-(--accent_green)'>Truyền cảm hứng sáng tạo</h2>
        </Reveal>
        <Reveal delay={1.5}>
          <p className='text-justify mb-5'>
            Giải phóng sự sáng tạo của bạn trong lựa chọn phòng thu và địa điểm độc đáo của chúng
            tôi. Sự lựa chọn hoàn hảo cho các nghệ sĩ, nhiếp ảnh gia và các sáng tạo đang tìm cách
            tạo ra kiệt tác tiếp theo của họ trong các thiết lập truyền cảm hứng.
          </p>
        </Reveal>
        <Reveal delay={2}>
          {' '}
          <CarouselSpace />
        </Reveal>
      </section>

      <section className='px-4 lg:px-[100px] my-[100px]'>
        <Reveal>
          <h2 className='mb-3 hover:text-(--accent_green)'>
            Tổ chức những sự kiện livestream chuyên nghiệp
          </h2>
        </Reveal>
        <Reveal delay={1.5}>
          <p className='text-justify mb-5'>
            Giải phóng sự sáng tạo của bạn trong lựa chọn phòng thu và địa điểm độc đáo của chúng
            tôi. Sự lựa chọn hoàn hảo cho các nghệ sĩ, nhiếp ảnh gia và các sáng tạo đang tìm cách
            tạo ra kiệt tác tiếp theo của họ trong các thiết lập truyền cảm hứng.
          </p>
        </Reveal>
        <Reveal delay={2}>
          {' '}
          <CarouselSpace />
        </Reveal>
      </section>

      <section className='px-4 lg:px-[100px] my-[100px]'>
        <Reveal>
          <h2 className='mb-3 hover:text-(--accent_green)'>
            Không gian ấn tượng cho việc sáng tác
          </h2>
        </Reveal>
        <Reveal delay={1.5}>
          <p className='text-justify mb-5'>
            Giải phóng sự sáng tạo của bạn trong lựa chọn phòng thu và địa điểm độc đáo của chúng
            tôi. Sự lựa chọn hoàn hảo cho các nghệ sĩ, nhiếp ảnh gia và các sáng tạo đang tìm cách
            tạo ra kiệt tác tiếp theo của họ trong các thiết lập truyền cảm hứng.
          </p>
        </Reveal>
        <Reveal delay={2}>
          {' '}
          <CarouselSpace />
        </Reveal>
      </section>
    </Box>
  );
};

export default HomePage;
