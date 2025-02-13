import React from 'react';
import { Navigate } from 'react-router-dom';

function AuthGuarding({ children }) {
    const isLoggedIn = localStorage.getItem('vite-user') !== null;

    return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default AuthGuarding;
