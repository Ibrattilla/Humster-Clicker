import React, { useState } from "react"
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
import Main from "./pages/Main"
import Third from "./pages/Third"
import Footer from "./Footer"
import Not_found from "./pages/Not_found"

const Layout = ({ coins, setCoins }) => {
  const location = useLocation()
  const showFooter = location.pathname === "/main" || location.pathname === "/third"

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main coins={coins} setCoins={setCoins} />} />
        <Route path="/third" element={<Third coins={coins} setCoins={setCoins} />} />
        <Route path="/*" element={<Not_found />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

const App = () => {
  const [coins, setCoins] = useState(0)

  return (
    <BrowserRouter>
      <Layout coins={coins} setCoins={setCoins} />
    </BrowserRouter>
  )
}

export default App