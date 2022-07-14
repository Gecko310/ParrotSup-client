import { useState, useEffect } from "react";
function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-red-300 underline">
                    Sign in
                </h1>
                <div className="mt-6">
                    <div className="mb-2">
                        <div
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </div>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md "
                        />
                    </div>
                    <div className="mb-2">
                        <div
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </div>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md "
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-red-300 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 text-white  bg-red-300 rounded-md hover:bg-black ">
                            Login
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-red-300 hover:underline"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Login;