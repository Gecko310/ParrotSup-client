import { useState, useEffect } from "react";
function Signup() {
    return (
        <div className="relative flex flex-col bg-gradient-to-t from-blue-400 to-pink-300 justify-center min-h-screen border-black">
            <div className="p-6 bg-white rounded  m-auto  ">
                <div className="mx-[35%] w-full">
                    Sign Up
                </div>
                <div className="mx-10">
                    <div>
                        <input placeholder="User Name" className="p-4 bg-white  border-gray border rounded mt-5 mb-3 " />
                    </div>
                    <div>
                        <input placeholder="Email" className="p-4 bg-white border-gray border rounded mb-3" />
                    </div>
                    <div>
                        <input placeholder="Password" className="p-4 bg-white border-gray border rounded mb-3" />
                    </div>
                    <div>
                        <input placeholder="Confirm Password" className="p-4 bg-white border-gray border rounded mb-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;