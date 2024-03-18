import React from 'react';
import Button from '../components/Button';

const SignIn = () => {
    return (
        <div className="flex justify-center items-center h-screen" style={{backgroundColor: '#242424'}}>
            <div className="bg-red-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ backgroundColor: '#121212' }}>
                <h1 className="text-2xl font-bold mb-8 "style={{color: 'white'}}>Sign In</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"style={{color: 'white'}}>
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            style={{backgroundColor: '#242424'}}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" style={{color: 'white'}}>
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            style={{backgroundColor: '#242424'}}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button text="Sign In" className="w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
