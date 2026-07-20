import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CorporateBooking from './pages/Corporates/CorporateBooking';
import StudentsHub from './pages/StudentsHub';
import ApartmentsHub from './pages/ApartmentsHub';
import HealthCamp from './pages/Corporates/HealthCamp';
import CorporateDayOut from './pages/Corporates/CorporateDayOut';
import CorporateEvents from './pages/Corporates/CorporateEvents';
import CorporateStressBusters from './pages/Corporates/CorporateStressBusters';
import CorporateGifting from './pages/Corporates/CorporateGifting';
import Refreshments from './pages/Corporates/Refreshments';
import Corporatespage from './pages/Corporates/CorporatesPage';
import StudentStressBusters from './pages/Students/StudentStressBusters';
import SchoolEvents from './pages/Students/SchoolEvents';
import CommunityStressBusters from './pages/Communities/CommunityStressBusters';
import CommunityEvents from './pages/Communities/CommunityEvents';
import { AuthProvider, useAuth } from './context/AuthContext';
import Notifications from './pages/admin/Notifications';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  // Landing page ("/") shows Login until the user is authenticated, then shows Home
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          !user ? (
            <Login />
          ) : user.role === 'admin' ? (
            <Navigate to="/admin/notifications" replace />
          ) : (
            <Home />
          )
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin/notifications"
        element={user?.role === 'admin' ? <Notifications /> : <Navigate to="/" replace />}
      />
      <Route path="/corporates/corporate-booking" element={<CorporateBooking />} />
      <Route path="/corporates/health-camp" element={<HealthCamp />} />
      <Route path="/corporates/corporate-day-out" element={<CorporateDayOut />} />
      <Route path="/corporates/corporate-events" element={<CorporateEvents />} />
      <Route path="/corporates/corporate-stress-busters" element={<CorporateStressBusters />} />
      <Route path="/corporates/corporate-gifting" element={<CorporateGifting />} />
      <Route path="/corporates/refreshments" element={<Refreshments />} />
   
<Route path="/services/corporates" element={<Corporatespage />} />

      {/* Student pages */}
      <Route path="/for-students" element={<StudentsHub />} />
      <Route path="/for-students/student-stress-busters" element={<StudentStressBusters />} />
      <Route path="/for-students/school-events" element={<SchoolEvents />} />

      {/* Apartment pages */}
      <Route path="/for-apartments" element={<ApartmentsHub />} />
      <Route path="/for-apartments/stress-buster-activities-for-community" element={<CommunityStressBusters />} />
      <Route path="/for-apartments/community-events" element={<CommunityEvents />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="relative">
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}