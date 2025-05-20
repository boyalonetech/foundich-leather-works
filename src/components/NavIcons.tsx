"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
// import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  // TEMPORARY
  // const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  // AUTH WITH WIX-MANAGED AUTH

  // const wixClient = useWixClient();

  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );

  //   console.log(loginRequestData);

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl); 
  };


  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/notification.png"
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="cursor-pointer relative" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image
          src="/cart.png"
          alt="cart"
          width={22}
          height={22}
            
        />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-found rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {/* {isCartOpen && <CartModel />} */}
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgba(0,0,0,0.3)] z-50">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M3 3h11v4h-2V5H5v14h7v-2h2v4H3z" />
                  <path d="M19.87 7h-2.4l2.66 4H9v2h11.13l-2.67 4h2.4l3.34-5z" />
                </g>
              </svg>
              {isLoading ? "Logging out..." : "Logout"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
