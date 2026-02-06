"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  ShoppingCart,
  FolderTree,
  Gift,
  Ban,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "상품",
    href: "/products",
    icon: Package,
  },
  {
    title: "주문",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "카테고리",
    href: "/categories",
    icon: FolderTree,
  },
  {
    title: "선물 꾸미기",
    href: "/decorations",
    icon: Gift,
  },
  {
    title: "금칙어 관리",
    href: "/banned-words",
    icon: Ban,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen bg-muted/40 border-r">
      <div className="p-4 border-b">
        <h1 className="text-lg font-semibold">네이트온 선물하기</h1>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
