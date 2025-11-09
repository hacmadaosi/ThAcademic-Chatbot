import { Toaster } from "sonner"
import {BrowserRouter, Routes, Route} from "react-router"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <Toaster richColors />

      <BrowserRouter>
        <Routes>
          <Route element={<HomePage/>} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
