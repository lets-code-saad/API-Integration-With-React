import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './Components/SingleProduct/SingleProduct.jsx'
import Login from './Components/Login/Login.jsx'
import WrongPassPage from './Components/Login/WrongPassPage.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/main" element={<App/>}/>
        <Route path="/single_product/:product_id" element={<SingleProduct/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/wrong" element={<WrongPassPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    ,
)
