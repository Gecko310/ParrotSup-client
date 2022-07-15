import { useState, useEffect } from "react";
function Signup() {
    return (
        <div className="relative flex flex-col bg-slate-200 justify-center min-h-screen ">
            <div className="p-6 bg-white rounded  m-auto ">
                <div className="mx-[35%] w-full">
                    Sign Up
                </div>
                <div>
                <input placeholder="User Name"className="p-4 bg-white rounded m-auto"/>
                </div>
                <div>
                <input placeholder="Email"className="p-4 bg-white rounded m-auto"/>
                </div>
                <div>
                <input placeholder="Password"className="p-4 bg-white rounded m-auto"/>
                </div>
                <div>
                <input placeholder="Confirm Password"className="p-4 bg-white rounded m-auto"/>
                </div>
            </div>
        </div>
    )
}
export default Signup;