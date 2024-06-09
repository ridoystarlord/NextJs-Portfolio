import Banner from '@/components/Banner';
import BlogSection from '@/components/BlogSection';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import ExpertiseSection from '@/components/ExpertiseSection';
import Hero from '@/components/Hero';
import HireMe from '@/components/HireMe';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Banner /> */}
      <ExpertiseSection />
      <HireMe />
      {/* <Services /> */}
      <Experience />
      {/* <Testimonials />
      <BlogSection /> */}
      <ContactMe />
    </main>
  );
}
