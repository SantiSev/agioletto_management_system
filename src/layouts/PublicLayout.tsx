import { Outlet } from "react-router-dom";

export default function PublicLayout(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Outlet />
      <footer className="absolute bottom-2 w-full h-8 text-black flex items-center justify-center text-sm md:text-lg font-sans font-normal">
        agioletto 2025<span className="mx-1.5">|</span> Created by Santiago
        Sevitz
      </footer>
    </main>
  );
}
