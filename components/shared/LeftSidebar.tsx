"use client";

import { sidebarLinks } from "@/constants";
// import { fetchUsernameById } from "@/lib/actions/user.action";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();
  // const username = await fetchUsernameById(userId);

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          // if (link.route === "/profile") link.route = `/${username}`;

          return (
            <Link
              key={link.label}
              href={link.route}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <div className={`${isActive ? "text-dark-1" : "text-light-1"}`}>
                {link.imgURL}
              </div>
              <p
                className={`${
                  isActive ? "text-dark-1" : "text-light-1"
                } max-lg:hidden`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <LogOut size={24} className="text-light-1" />
              <p className="text-light-1 max-lg:hidden">Sign Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
