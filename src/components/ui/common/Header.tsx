import { useState } from "react";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import {
  Home,
  User,
  Moon,
  Sun,
  Menu,
  X,
  LogOut,
  ShoppingCart,
} from "lucide-react";

interface NavLink {
  path: string;
  label: string;
  isAuth?: boolean;
  notification?: boolean;
  icon?: React.ReactNode;
}

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    profileImage?: string;
  } | null>({
    name: "John Doe",
    profileImage: "/profile.jpg",
  });
  const [cartItems] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/products", label: "Products" },
    {
      path: "/cart",
      label: "Cart",
      notification: true,
      icon: <ShoppingCart size={16} />,
    },
    {
      path: "/profile",
      label: "Profile",
      isAuth: true,
      icon: <User size={16} />,
    },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    setUser(null);
    // Add logout logic here
  };

  const navigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${darkMode ? "dark" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between bg-background">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold">Jewellery</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            if (link.isAuth && !user) return null;
            return (
              <div
                key={link.path}
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 cursor-pointer"
                onClick={() => navigate(link.path)}
              >
                {link.icon}
                <span>{link.label}</span>
                {link.notification && cartItems > 0 && (
                  <span className="ml-1 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                    {cartItems}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* User Profile or Login */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="rounded-full h-8 w-8"
                    />
                  ) : (
                    <User size={20} />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2">
                  <User size={16} />
                  <span>Hi! {user.name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onClick={() => navigate("/profile")}
                >
                  <User size={16} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => navigate("/login")}>Login</Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-3/4 bg-background p-4">
            <div className="flex justify-end mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.isAuth && !user) return null;
                return (
                  <div
                    key={link.path}
                    className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-accent cursor-pointer"
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                    {link.notification && cartItems > 0 && (
                      <span className="ml-auto h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                        {cartItems}
                      </span>
                    )}
                  </div>
                );
              })}

              <div className="mt-4 border-t pt-4">
                {user ? (
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                ) : (
                  <Button className="w-full" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
