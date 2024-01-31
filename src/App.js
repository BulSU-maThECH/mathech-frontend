import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { UserProvider } from './UserContext';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import './App.css';

import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import DashboardSidebar from './components/DashboardSidebar';
import PageOffline from './pages/PageOffline';
import Auth from './pages/Auth';
import QuizGenerator from './pages/QuizGenerator';
import About from './pages/About';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

export default function App() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [user, setUser] = useState(null);
    const [appTheme, setAppTheme] = useState("light");

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);

        return () => {
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        }
    }, []);
    
    function unsetUser() {
        const swalLoading = Swal.fire({
            title: 'Logging out...',
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        setTimeout(() => {
            setUser(null);
            sessionStorage.removeItem('token');
            localStorage.removeItem('token');
            Cookies.remove('authToken');
            
            swalLoading.close();
        }, 2000);
    };

    useEffect(() => {
        let authToken;

        if (Cookies.get('authToken')) {
            authToken = Cookies.get('authToken');
            getUserDetails(authToken);
        }
        else if (localStorage.getItem('token')) {
            authToken = localStorage.getItem('token');
            getUserDetails(authToken);
        }
        else if (sessionStorage.getItem('token')) {
            authToken = sessionStorage.getItem('token');
            getUserDetails(authToken);
        }

    }, []);

    function getUserDetails(token) {
        fetch(`${process.env.REACT_APP_API_URL}/user/details`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setUser({
                id: result._id
            });
            sessionStorage.setItem('token', token);
            localStorage.setItem('token', token);
            Cookies.set('authToken', token, { secure: true });
        });
    };

    useEffect(() => {
        document.body.setAttribute('data-mt-theme', appTheme);
    }, [appTheme]);

    function toggleAppTheme() {
        setAppTheme((prevTheme) => (
            prevTheme === 'light' ? 'dark' : 'light'
        ));
    };
    
    return (
        <Router>
            {isOnline ? (
                <UserProvider value={{ user, setUser, unsetUser }}>
                    <AppNavbar toggleAppTheme={toggleAppTheme} appTheme={appTheme} unsetUser={unsetUser} />
                        <Routes>
                            <Route path="/*" element={user ? <DashboardRoutes appTheme={appTheme} /> : <Navigate to="/auth" />} />
                            <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth appTheme={appTheme} />} />
                            <Route path="/about" element={<About appTheme={appTheme} />} />
                        </Routes>
                </UserProvider>
            ) : (
                <PageOffline />
            )}
            <AppFooter />
        </Router>
    );
};

function DashboardRoutes({appTheme}) {

    return (
        <Fragment>
            <DashboardSidebar appTheme={appTheme} />
            <Routes>
                <Route index element={<QuizGenerator />} />
                <Route path="/q/:uuid" element={<QuizGenerator />} />
            </Routes>
        </Fragment>
    );
};