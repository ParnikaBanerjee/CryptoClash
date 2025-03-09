import { Fragment } from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu"; // Import ShadCN dropdown components
import { useNavigate } from "react-router-dom";

function MainHeader({ setOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login"); // Navigate to the login page after logging out
  };

  return (
    <header className="flex items-center px-4 py-3 bg-black text-[#00FF41] justify-between font-['Playfair_Display']">
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden sm:block bg-[#00FF41] text-black font-bold hover:bg-[#00CC33] focus:outline-none"
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="flex flex-1 justify-end">
        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-12 h-12 bg-[#00FF41] rounded-full flex justify-center items-center text-black text-2xl font-bold cursor-pointer">
              S {/* Display user's first letter */}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" className="w-56 bg-[#1A1A1A] border border-[#00FF41]">
            <DropdownMenuLabel className="text-[#00FF41] font-['Playfair_Display']">
              Logged in as <span className="font-bold">S</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => navigate("/main/Score")} 
              className="text-[#00FF41] hover:bg-[#00CC33] font-['Playfair_Display']"
            >
              <LogOut className="mr-2 h-4 w-4" /> Score
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={handleLogout} 
              className="text-red-600 hover:bg-[#00CC33] font-['Playfair_Display']"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default MainHeader;
