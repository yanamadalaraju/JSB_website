import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CorporateBooking from './pages/Corporates/CorporateBooking';
import StudentsHub from './pages/StudentsHub';
import ApartmentsHub from './pages/ApartmentsHub';
import HealthCamp from './pages/Corporates/HealthCamp';
import CorporateDayOut from './pages/Corporates/CorporateDayOut';
import CorporateEvents from './pages/Corporates/CorporateEvents';
import CorporateStressBusters from './pages/Corporates/CorporateStressBusters';
import CorporateGifting from './pages/Corporates/CorporateGifting';
import Refreshments from './pages/Corporates/Refreshments';
import StudentStressBusters from './pages/Students/StudentStressBusters';
import SchoolEvents from './pages/Students/SchoolEvents';
import CommunityStressBusters from './pages/Communities/CommunityStressBusters';
import CommunityEvents from './pages/Communities/CommunityEvents';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporates/corporate-booking" element={<CorporateBooking />} />
          <Route path="/corporates/health-camp" element={<HealthCamp />} />
          <Route path="/corporates/corporate-day-out" element={<CorporateDayOut />} />
          <Route path="/corporates/corporate-events" element={<CorporateEvents />} />
          <Route path="/corporates/corporate-stress-busters" element={<CorporateStressBusters />} />
          <Route path="/corporates/corporate-gifting" element={<CorporateGifting />} />
          <Route path="/corporates/refreshments" element={<Refreshments />} />


          {/* Corporate sub-pages */}
          {/* <Route path="/corporates/health-camp" element={
            <CorporateSubPage title="Health Camp" subtitle="Comprehensive wellness health camps for your employees."
              imageUrl="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="Our Health Camp brings medical professionals, fitness experts, and wellness coaches directly to your office. Employees get free health check-ups, consultations, and personalized wellness plans."
              features={['Free health check-ups', 'BMI & fitness assessment', 'Nutrition consultation', 'Mental health screening', 'On-site doctor consultation', 'Wellness goodie bags']} />
          } />
          <Route path="/corporates/corporate-day-out" element={
            <CorporateSubPage title="Corporate Day Out" subtitle="Unforgettable team outings that build bonds and bust stress."
              imageUrl="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="A full day of fun, games, and bonding. Choose from 12 activity formats including Squid Games, Soft Archery, Mini Golf, and Giant Jenga. Perfect for team building and stress relief."
              features={['12 activity formats', 'Full-day event', 'On-site or off-site', 'Customizable packages', 'Professional facilitators', 'All equipment provided']} showActivities />
          } />
          <Route path="/corporates/corporate-events" element={
            <CorporateSubPage title="Corporate Events" subtitle="From conferences to celebrations — we make your events memorable."
              imageUrl="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="Whether it's an annual conference, product launch, or team celebration, JSB handles every detail. From planning to execution, we create events that leave lasting impressions."
              features={['Event planning & management', 'Venue selection', 'Entertainment & activities', 'Catering coordination', 'AV & production support', 'On-site coordination']} />
          } />
          <Route path="/corporates/corporate-stress-busters" element={
            <CorporateSubPage title="Corporate Stress Busters" subtitle="Quick, effective stress-relief activities for the workplace."
              imageUrl="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="Short, high-impact sessions designed to break up the workday. Zumba, yoga, meditation, and fun games that refresh minds and boost productivity."
              features={['Zumba sessions', 'Yoga & meditation', 'Quick team games', 'Desk stretching', 'Mindfulness workshops', 'Laughter therapy']} />
          } />
          <Route path="/corporates/corporate-gifting" element={
            <CorporateSubPage title="Corporate Gifting" subtitle="Thoughtful, personalized gifts that employees actually love."
              imageUrl="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="Curated gift hampers for every occasion — Diwali, New Year, employee milestones. Sweet boxes, snack hampers, and wellness kits personalized with your company branding."
              features={['Personalized branding', 'Festive hampers', 'Wellness kits', 'Sweet & snack boxes', 'Custom packaging', 'Bulk ordering']} />
          } />
          <Route path="/corporates/refreshments" element={
            <CorporateSubPage title="Refreshments" subtitle="Healthy, delicious refreshments for your events and meetings."
              imageUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              description="From healthy snack platters to indulgent treats, our refreshment service keeps your team fueled and happy. Perfect for meetings, events, and day-outs."
              features={['Healthy snack platters', 'Fresh juice & smoothies', 'Tea & coffee stations', 'Custom menus', 'Dietary accommodations', 'On-time delivery']} />
          } /> */}



          {/* Student pages */}
          <Route path="/for-students" element={<StudentsHub />} />
          <Route path="/for-students/student-stress-busters" element={<StudentStressBusters />} />
          <Route path="/for-students/school-events" element={<SchoolEvents />} />

          {/* <Route path="/for-students/student-stress-busters" element={
            <ActivityPage eyebrow="For Students" title="Stress Buster For Students" subtitle="Six fun activities that help students unwind, express themselves, and smile."
              imageUrl="https://images.pexels.com/photos/8434631/pexels-photo-8434631.jpeg?auto=compress&cs=tinysrgb&w=1600"
              items={STUDENT_ACTIVITIES} />
          } />
          <Route path="/for-students/school-events" element={
            <ActivityPage eyebrow="For Students" title="School Events" subtitle="Full-scale school events managed end-to-end by JSB."
              imageUrl="https://images.pexels.com/photos/8434639/pexels-photo-8434639.jpeg?auto=compress&cs=tinysrgb&w=1600"
              items={SCHOOL_EVENTS} />
          } /> */}

          {/* Apartment pages */}
          <Route path="/for-apartments" element={<ApartmentsHub />} />
          <Route path="/for-apartments/stress-buster-activities-for-community" element={<CommunityStressBusters />} />
          <Route path="/for-apartments/community-events" element={<CommunityEvents />} />
          {/* <Route path="/for-apartments/stress-buster-activities-for-community" element={
            <ActivityPage eyebrow="For Apartments" title="Stress Buster Activities For Community" subtitle="Six wellness activities that bring your apartment community together."
              imageUrl="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600"
              items={COMMUNITY_ACTIVITIES} />
          } />
          <Route path="/for-apartments/community-events" element={
            <ActivityPage eyebrow="For Apartments" title="Community Events" subtitle="Full-scale community events that create lasting memories."
              imageUrl="https://images.pexels.com/photos/7045545/pexels-photo-7045545.jpeg?auto=compress&cs=tinysrgb&w=1600"
              items={COMMUNITY_EVENTS} />
          } /> */}


        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
