import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AdminLayout (): JSX.Element {

    return (
      <>
        <NavBar />
        <main className='min-h-[calc(100vh-92px)]'>
          <Outlet />
        </main>
      </>
    )
  }
  