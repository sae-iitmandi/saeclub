import { FunctionComponent } from 'react';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import Layout from '@/hocs/Layout';
import { Box } from '@mui/material';
import LatestBlog from '@/components/LatestBlog';
import ContactUs from '@/components/ContactUs';

const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <Box>
        <HeroSection />
        {/* <WhatWeDoSection /> */}
        <LatestBlog />
        <ContactUs />
      </Box>
    </Layout>
  );
};

export default HomePage;