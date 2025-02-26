import { Outlet } from "react-router-dom";

export default function PublicLayout(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Outlet />
      <footer className="absolute bottom-0 md:bottom-1 w-full h-8 text-black shadow-2xl flex items-center justify-center text-xs  font-sans font-normal">
        agioletto 2025<span className="mx-1.5">|</span> Created by Santiago
        Sevitz
      </footer>
    </main>
  );
}
