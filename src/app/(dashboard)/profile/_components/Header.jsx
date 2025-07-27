"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ButtonIcon from "@/ui/ButtonIcon";
import Avatar from "@/ui/Avatar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "@/ui/Drawer";
import SideBar from "./SideBar";
import { useState } from "react";

function Header({}) {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          variant="outline"
          className="block lg:hidden border-none"
          onClick={() => setOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>
        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام؛ {user?.name}
        </span>
        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>
        <Drawer open={isOpenDrawer} onClose={() => setOpenDrawer(false)}>
          <SideBar onClose={() => setOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
