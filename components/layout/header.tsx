"use client";

import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui";

interface HeaderProps {
  username?: string;
  displayName?: string;
}

export function Header({
  username = "test1234",
  displayName = "홍길동",
}: HeaderProps) {
  return (
    <header className="h-14 border-b bg-background px-6 flex items-center justify-end gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <User className="h-4 w-4" />
        <span>
          {username}({displayName})
        </span>
      </div>
      <Button variant="ghost" size="sm">
        <LogOut className="h-4 w-4" />
        로그아웃
      </Button>
    </header>
  );
}
