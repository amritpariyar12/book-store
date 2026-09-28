import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import PublisherDetailsPage from './pages/PublisherDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="publications" element={<PublicationsPage />} />
          {/* Handle /publications/:publisherSlug (and optionally deep path via /*) */}
          <Route path="publications/:publisherId/*" element={<PublisherDetailsPage />} />

          {/* General Category Browsing */}
          <Route path="category/*" element={<CategoryPage />} />

          <Route path="book/:bookId" element={<BookDetailsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
