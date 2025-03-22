import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu"; // Import ShadCN dropdown components
import { UserCog, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.jsx";
import { HyperText } from "../magicui/hyper-text";

const SidebarMenu = [
  { id: "dashboard", label: "Dashboard", path: "/main/dashboard" },
  { id: "leaderboard", label: "Ranklist", path: "/main/leaderboard" },
  { id: "team", label: "Add Team", path: "/main/team" },
  { id: "rules", label: "Rules", path: "/main/rules" },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex flex-col gap-4">
      {SidebarMenu.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            if (setOpen) setOpen(false);
          }}
          className="flex cursor-pointer items-center gap-4 rounded-md px-4 py-3 text-[#ADFF2F] hover:bg-[#9BE02C] hover:text-black transition-all duration-300 transform hover:scale-105 ease-in-out font-['Playfair_Display']"
        >
          <span className="text-lg font-semibold">
            <HyperText>{menuItem.label}</HyperText>
          </span>
        </div>
      ))}
    </nav>
  );
}

function MainSideBar({ open, setOpen, user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 bg-black text-[#ADFF2F] font-['Playfair_Display']">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b border-gray-700">
              <SheetTitle className="flex gap-2 mt-5 mb-5 text-[#ADFF2F]">
                <h1 className="text-2xl font-extrabold animate__animated animate__fadeIn">
                  CRYPTOCLASH
                </h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      <aside className="hidden w-64 flex-col border-r bg-black p-6 lg:flex text-[#ADFF2F] font-['Playfair_Display']">
        <div
          onClick={() => navigate("/main/dashboard")}
          className="flex cursor-pointer items-center gap-4 text-[#ADFF2F] animate__animated animate__fadeIn"
        >
          <h1 className="text-2xl font-extrabold">CRYPTOCLASH</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default MainSideBar;
