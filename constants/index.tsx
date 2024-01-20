import {
  AlignJustify,
  BookUser,
  Flame,
  Heart,
  Home,
  Search,
  SquarePen,
  Tag,
  User,
  Users2,
} from "lucide-react";

export const sidebarLinks: {
  imgURL: JSX.Element;
  route: string;
  label: string;
}[] = [
  {
    imgURL: <Home size={24} />,
    route: "/",
    label: "Beranda",
  },
  {
    imgURL: <Search size={24} />,
    route: "/search",
    label: "Temukan",
  },
  {
    imgURL: <Heart size={24} />,
    route: "/activity",
    label: "Aktivitas",
  },
  {
    imgURL: <SquarePen size={24} />,
    route: "/create-thread",
    label: "Buat Postingan",
  },
  {
    imgURL: <Users2 size={24} />,
    route: "/communities",
    label: "Komunitas",
  },
  {
    imgURL: <User size={24} />,
    route: "/profile",
    label: "Profil",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: <AlignJustify size={24} /> },
  { value: "replies", label: "Replies", icon: <Flame size={24} /> },
  { value: "tagged", label: "Tagged", icon: <Tag size={24} /> },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: <AlignJustify size={24} /> },
  { value: "members", label: "Members", icon: <Flame size={24} /> },
  { value: "requests", label: "Requests", icon: <BookUser size={24} /> },
];
