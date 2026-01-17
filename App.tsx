/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import LegalPage from './components/LegalPage';
import DashboardPage from './components/DashboardPage';
import PlaygroundPage from './components/PlaygroundPage';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="/privacy" element={<LegalPage />} />
                <Route path="/terms" element={<LegalPage />} />
                <Route path="/policy" element={<LegalPage />} />

                {/* Protected Dashboard Routes */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/playground" element={<PlaygroundPage />} />

                {/* Catch-all for dashboard sub-routes to redirect to dashboard home for now */}
                <Route path="/dashboard/*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
