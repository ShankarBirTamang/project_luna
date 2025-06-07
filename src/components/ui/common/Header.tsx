import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  path: string;
  label: string;
  isAuth?: boolean;
  notification?: boolean;
  icon?: React.ReactNode;
}

export function Header() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    profileImage?: string;
  } | null>({
    name: "Sankar Bir",
    profileImage: "/profile.jpg",
  });
  const [cartItems] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    navigate("/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-background",
        darkMode ? "dark" : ""
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/10">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Luna
            <span className="text-primary">Sphere</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            if (link.isAuth && !user) return null;
            return (
              <div
                key={link.path}
                className="group relative text-sm font-medium"
                onClick={() => navigate(link.path)}
              >
                <div className="flex cursor-pointer items-center gap-1.5 transition-colors hover:text-primary">
                  {link.icon}
                  <span>{link.label}</span>
                  {link.notification && cartItems > 0 && (
                    <span className="ml-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
                      {cartItems}
                    </span>
                  )}
                </div>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
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
            className="rounded-full transition-transform hover:scale-110 hover:bg-transparent hover:text-primary"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* User Profile or Login */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 rounded-full pl-3 pr-4 hover:bg-accent"
                >
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/20"
                    />
                  ) : (
                    <User size={20} />
                  )}
                  <span className="hidden sm:inline-block">{user.name}</span>
                  <ChevronDown size={14} className="text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2 p-3">
                  <User size={16} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="font-medium">Hi! {user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      View your profile
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onClick={() => navigate("/profile")}
                >
                  <User size={16} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2 text-red-600 focus:text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow"
            >
              Login
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden hover:bg-transparent hover:text-primary transition-transform hover:scale-110"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background p-6 shadow-xl transition-transform duration-300",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.isAuth && !user) return null;
              return (
                <div
                  key={link.path}
                  className="group flex items-center gap-3 rounded-lg p-3 text-sm font-medium transition-colors hover:bg-accent"
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {link.notification && cartItems > 0 && (
                    <span className="ml-auto flex h-6 min-w-6 items-center justify-center rounded-full bg-primary/10 px-1.5 text-xs font-medium text-primary">
                      {cartItems}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto border-t pt-4">
            {user ? (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogout}
              >
                <LogOut size={16} className="text-destructive" />
                <span className="font-medium">Logout</span>
              </Button>
            ) : (
              <Button className="w-full" onClick={() => navigate("/login")}>
                <User size={16} className="mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
