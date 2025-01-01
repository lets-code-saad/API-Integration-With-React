import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './Components/SingleProduct/SingleProduct.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/single_product/:product_id" element={<SingleProduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
    ,
)
