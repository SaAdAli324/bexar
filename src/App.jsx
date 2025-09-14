import './App.css'
import HeroSectionSlider from './components/HeroSectionSlider';
import HeroSectionCards from './components/HeroSectionCards';
import AboutUsSection from './components/AboutUsSection';
import StatsSection from './components/StatsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServiceProvideSection from './components/ServiceProvideSection';
import OurTeamSection from './components/OurTeamSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTAsection';
import NewsSection from './components/NewsSection';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <HeroSectionSlider />
              <HeroSectionCards />
              <AboutUsSection />
              <StatsSection />
              <WhyChooseUsSection />
              <ServiceProvideSection />
              <OurTeamSection />
              <CaseStudiesSection />
              <TestimonialSection />
              <CTASection />
              <NewsSection />
            </>
          ),
        },
        {
          path:"/about",
          element:(
            <>
            <CTASection />
            <AboutUsSection />
            <TestimonialSection />

            </>
          )},
            {
          path:"/blog",
          element:(
            <>
              <NewsSection />
            </>
          )},
              {
          path:"/contact",
          element:(
            <>
            <CTASection />
           
            </>
          )},
               {
          path:"/pages",
          element:(
            <>
            <OurTeamSection />
              <CaseStudiesSection />
              <TestimonialSection />
           
            </>
          )},

               {
          path:"/shortcode",
          element:(
            <>
            <div className='py-50 primary-color text-5xl font-bold text-center'>
              <h2>"There are no shortcodes write one by yourself" ~ saad</h2>


            </div>
           
            </>
          )},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
