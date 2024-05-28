import { loginAdmin } from 'api/AuthApi';
import { useAuth } from 'contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { authUser, setAuthUser } = useAuth();
    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const response = await loginAdmin(username, password);
            if (response.status === 200) {
                setAuthUser(response.dataRes.data);
                window.location.href = 'https://music-party-admin.vercel.app/';
            }
            else {
                alert("Login failed");
            }
        } catch (error){
            alert(error);
        }
    }
    useEffect(() => {
        if (authUser)
            navigate('/')
    }, [])
    const handleUserNameOnchange = (e) => {
        setUserName(e.target.value);
    }
    const handlePasswordOnchange = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-gray py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-custom-green">
                        Console <span className="text-custom-green">Music Party</span>
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                value={username}
                                onChange={handleUserNameOnchange}
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-custom-green rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handlePasswordOnchange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-custom-green rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="/" className="font-medium text-custom-green hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-custom-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;