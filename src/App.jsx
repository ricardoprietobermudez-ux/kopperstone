import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { LanguageProvider } from '@/lib/i18n';

import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import Kitchens from '@/pages/Kitchens';
import Countertops from '@/pages/Countertops';
import CabinetDoors from '@/pages/CabinetDoors';
import KitchenSinks from '@/pages/KitchenSinks';
import KitchenFaucets from '@/pages/KitchenFaucets';
import BathroomSinks from '@/pages/BathroomSinks';
import Vanities from '@/pages/Vanities';
import Bathtubs from '@/pages/Bathtubs';
import BathroomFaucets from '@/pages/BathroomFaucets';
import Process from '@/pages/Process';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Configurator from '@/pages/Configurator';
import TradeHome from '@/pages/trade/TradeHome';
import TradeProcess from '@/pages/trade/TradeProcess';
import Capabilities from '@/pages/trade/Capabilities';
import Quality from '@/pages/trade/Quality';
import Projects from '@/pages/trade/Projects';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-navy">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          <span className="font-serif text-cream/30 text-sm tracking-widest">Kopperstone</span>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/"                   element={<Home />} />
        <Route path="/kitchens"           element={<Kitchens />} />
        <Route path="/countertops"        element={<Countertops />} />
        <Route path="/cabinet-doors"      element={<CabinetDoors />} />
        <Route path="/kitchen-sinks"      element={<KitchenSinks />} />
        <Route path="/kitchen-faucets"    element={<KitchenFaucets />} />
        <Route path="/bathroom-sinks"     element={<BathroomSinks />} />
        <Route path="/vanities"           element={<Vanities />} />
        <Route path="/bathtubs"           element={<Bathtubs />} />
        <Route path="/bathroom-faucets"   element={<BathroomFaucets />} />
        <Route path="/process"            element={<Process />} />
        <Route path="/about"              element={<About />} />
        <Route path="/contact"            element={<Contact />} />
        <Route path="/configurator"       element={<Configurator />} />
        <Route path="/trade"              element={<TradeHome />} />
        <Route path="/trade/process"      element={<TradeProcess />} />
        <Route path="/trade/capabilities" element={<Capabilities />} />
        <Route path="/trade/quality"      element={<Quality />} />
        <Route path="/trade/projects"     element={<Projects />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <LanguageProvider>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </LanguageProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;