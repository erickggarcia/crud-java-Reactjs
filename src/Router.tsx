import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layout/DefaultLayout"
import { Home } from "./pages/home"
import { Users } from "./pages/users"

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}> 
                <Route path="/" element={<Home/>}/>            
                <Route path="/users" element={<Users/>}/>            
            </Route>
        </Routes>
    )
}