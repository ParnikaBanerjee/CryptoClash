import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full transition-opacity duration-1000 font-[Inter]">
            {/* Left Side - Welcome Section */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-[#D4A373] w-1/2 px-12 transition-transform duration-1000">
                {/* Text & Title */}
               <h1>Sidebar</h1>
            </div>

            {/* Right Side - Login/Register Forms */}
            <div className="flex flex-1 items-center justify-center bg-[#FEFAE0] px-6 py-12 transition-transform duration-1000">
            <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
