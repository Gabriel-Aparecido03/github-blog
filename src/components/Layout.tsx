import { ReactNode } from "react";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode}) {
  return (
    <div>
      <Header />
      <div className="bg-base-background px-72 min-h-[calc(100vh-296px)] w-full">
        { children }
      </div>
    </div>
  )
}