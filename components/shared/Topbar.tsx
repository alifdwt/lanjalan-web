import Link from "next/link";
import { Footprints, LogOut } from "lucide-react";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center gap-4">
        <div className="border border-primary-500 rounded-full p-2">
          <Footprints size={18} className="text-primary-500" />
        </div>
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Lanjalan
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <LogOut size={24} className="text-light-1" />
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
