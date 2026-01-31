import Header from "./Header"
import { Outlet } from "react-router-dom"

function Layout({ sepet }) {
  return (
    <>
      <Header sepet={sepet} />
      <main style={{ paddingTop: "110px" }}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
