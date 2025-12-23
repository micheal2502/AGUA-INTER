// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Philosophy from "./pages/Philosophy";
import ContactInfoForm from "./pages/Connect";
import ContactStep2 from "./pages/Connect/step2";
import ContactStep3 from "./pages/Connect/step3";
import ContactStep4 from "./pages/Connect/step4";
import ContactComplete from "./pages/Connect/complete";
import BlogPage from "./pages/Blog";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <LanguageProvider>
      {/* Wrap everything with LanguageProvider */}
      <div className="min-h-screen flex flex-col">
        {!isLandingPage && <Navigation />}
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
                        <Route path="/experience" element={<Experience />} />

            <Route path="/connect/step1" element={<ContactInfoForm />} />
            <Route path="/connect/step2" element={<ContactStep2 />} />
            <Route path="/connect/step3" element={<ContactStep3 />} />
            <Route path="/connect/complete" element={<ContactStep4 />} />
            <Route path="/contact/complete" element={<ContactComplete />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>

        {/* Footer hiển thị trên tất cả trang trừ Landing */}
        {!isLandingPage && <Footer />}
      </div>
    </LanguageProvider>
  );
};

// Wrap App with Router
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;