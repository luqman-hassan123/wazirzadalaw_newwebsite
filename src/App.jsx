import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import FamilyLawPage from './pages/FamilyLawPage'
import CivilLawPage from './pages/CivilLawPage'
import CorporateCommercialPage from './pages/CorporateCommercialPage'
import ImmigrationPage from './pages/ImmigrationPage'
import AttestationPage from './pages/AttestationPage'
import OverseasPakistanisPage from './pages/OverseasPakistanisPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services/family-law', element: <FamilyLawPage /> },
      { path: 'services/civil-law', element: <CivilLawPage /> },
      { path: 'services/corporate-commercial', element: <CorporateCommercialPage /> },
      { path: 'services/immigration', element: <ImmigrationPage /> },
      { path: 'services/attestation', element: <AttestationPage /> },
      { path: 'overseas-pakistanis', element: <OverseasPakistanisPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'services', element: <Navigate to="/services/family-law" replace /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
