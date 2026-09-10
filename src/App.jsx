import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { SublayProvider } from '@sublay/react-js';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Booking from './pages/Booking/Booking';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <SublayProvider projectId="c1fc7f5e-9352-41ca-948a-4d1648957585">
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="about" element={<About />} />

              <Route path="service" element={<Service />} />

              <Route
                path="service/:groupKey/:itemIdx"
                element={<ServiceDetail />}
              />

              <Route path="contact" element={<Contact />} />

              <Route path="booking" element={<Booking />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </SublayProvider>
  );
}

export default App;