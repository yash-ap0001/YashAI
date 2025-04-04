import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CustomCursor from "@/components/ui/CustomCursor";
import ProgressBar from "@/components/ui/ProgressBar";
import { useEffect } from "react";
import { CursorProvider } from "@/contexts/CursorContext";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Set page scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add media query for reduced motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = "auto";
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CursorProvider>
        <CustomCursor />
        <ProgressBar />
        <Router>
          <AppRoutes />
        </Router>
        <Toaster />
      </CursorProvider>
    </QueryClientProvider>
  );
}

export default App;
