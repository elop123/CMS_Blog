import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { MainLayout } from './layout/MainLayout';
import './App.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        
        </Route>
      </Routes>
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
