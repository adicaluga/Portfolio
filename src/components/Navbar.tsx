import { NavLink } from "@/components/NavLink";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <NavLink 
          to="/" 
          className="font-mono text-lg font-medium text-foreground transition-colors hover:text-primary"
        >
          &lt;dev /&gt;
        </NavLink>
        
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeClassName="text-primary"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
