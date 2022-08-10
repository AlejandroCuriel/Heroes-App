import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, Search, Hero } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<Search />} />
          <Route path="hero" element={<Hero />} />

          {/*Search*/}
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>

    </>
    )
}
