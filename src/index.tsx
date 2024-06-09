import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, AuthPage, AccountPage, AllTracksPage, TrackPage, ProjectPage, SearchPage, Error404Page } from './page';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />'
        <Route path="/auth" element={ <AuthPage /> } />'
        <Route path="/account" element={ <AccountPage /> } />'
        <Route path="/tracks" element={ <AllTracksPage /> } />
        <Route path="/tracks/:id" element={ <TrackPage /> } />
        <Route path="/projects/:id" element={ <ProjectPage /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="*" element={ <Error404Page /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
