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

const menuGroups = [
  {
    title: "네이트온 선물하기",
    items: [
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
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-muted/40 border-r">
      <nav className="p-2">
        {menuGroups.map((group) => (
          <div key={group.title} className="mb-4">
            <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
              <ChevronDown className="h-4 w-4" />
              {group.title}
            </div>
            <ul className="space-y-1 ml-2">
              {group.items.map((item) => {
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
          </div>
        ))}
      </nav>
    </aside>
  );
}
