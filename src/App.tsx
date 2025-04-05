
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import RecordClassPage from "./pages/RecordClass";
import ParentConnectPage from "./pages/ParentConnect";
import Students from "./pages/Students";
import NotFound from "./pages/NotFound";
import SolutionOverview from "./pages/SolutionOverview";
import AdhyayanMitra from "./pages/AdhyayanMitra";
import VidhyarthiVault from "./pages/VidhyarthiVault";
import GuruPragati from "./pages/GuruPragati";
import SamudayaSangam from "./pages/SamudayaSangam";
import ShikshaNirikshan from "./pages/ShikshaNirikshan";
import NEPBuddy from "./pages/NEPBuddy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/record-class" element={<RecordClassPage />} />
          <Route path="/parent-connect" element={<ParentConnectPage />} />
          <Route path="/students" element={<Students />} />
          
          {/* Solution Component Routes */}
          <Route path="/solution-overview" element={<SolutionOverview />} />
          <Route path="/adhyayan-mitra" element={<AdhyayanMitra />} />
          <Route path="/vidhyarthi-vault" element={<VidhyarthiVault />} />
          <Route path="/guru-pragati" element={<GuruPragati />} />
          <Route path="/samudaya-sangam" element={<SamudayaSangam />} />
          <Route path="/shiksha-nirikshan" element={<ShikshaNirikshan />} />
          <Route path="/nep-buddy" element={<NEPBuddy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
