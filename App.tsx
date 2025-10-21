import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Garages from "./pages/Garages";
import Services from "./pages/Services";
import Accessoires from "./pages/Accessoires";
import Garagistes from "./pages/Garagistes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GarageRegistration from "./pages/GarageRegistration";
import Constatateurs from "./pages/Constatateurs";
import ServicesPremium from "./pages/ServicesPremium";
import Reservation from "./pages/Reservation";
import CarRental from "./pages/CarRental";
import TowingService from "./pages/TowingService";
import MarketplaceLogin from "./pages/MarketplaceLogin";
import Marketplace from "./pages/Marketplace";
import MarketplaceOfferDetail from "./pages/MarketplaceOfferDetail";
import MarketplaceDashboard from "./pages/MarketplaceDashboard";
import NotFound from "./pages/NotFound";
import { MarketplaceAuthProvider } from "./contexts/MarketplaceAuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MarketplaceAuthProvider>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Marketplace routes without Header/Footer */}
              <Route path="/marketplace-login" element={<MarketplaceLogin />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/offer/:id" element={<MarketplaceOfferDetail />} />
              <Route path="/marketplace-dashboard" element={<MarketplaceDashboard />} />
              
              {/* Regular routes with Header/Footer */}
              <Route path="/*" element={
                <>
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/garages" element={<Garages />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/accessoires" element={<Accessoires />} />
                      <Route path="/location-voiture" element={<CarRental />} />
                      <Route path="/depannage-remorquage" element={<TowingService />} />
                      <Route path="/garagistes" element={<Garagistes />} />
                      <Route path="/inscription-garage" element={<GarageRegistration />} />
                      <Route path="/reservation" element={<Reservation />} />
                      <Route path="/constatateur" element={<Constatateurs />} />
                      <Route path="/services-premium" element={<ServicesPremium />} />
                      <Route path="/a-propos" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </MarketplaceAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
