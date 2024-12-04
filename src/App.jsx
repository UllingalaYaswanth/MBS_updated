import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MBS from './layouts/MBS_dashborad.jsx';
import Towers from './layouts/Towers_dashboard.jsx';
import CV_dashboard from './layouts/CV_dashboard.jsx'
import Aadhya_dashboard from './layouts/Aadhya_dashboard.jsx';
import Product1 from './components/MBS/Solutions/Product1.jsx';
import Product2 from './components/MBS/Solutions/Product2.jsx';
import Product3 from './components/MBS/Solutions/Product3.jsx';
import Product4 from './components/MBS/Solutions/Product4.jsx';
import Product5 from './components/MBS/Solutions/Product5.jsx';
import About from './components/MBS/About.jsx';

function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route path="/" element={<MBS />} />
       <Route path="/towers_page" element={<Towers />} />
       <Route path="/cv_page" element={<CV_dashboard />} />
       <Route path="/aadhya_page" element={<Aadhya_dashboard/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/Product1" element={<Product1/>} />
       <Route path="/Product2" element={<Product2/>} />
       <Route path="/Product3" element={<Product3/>} />
       <Route path="/Product4" element={<Product4/>} />
       <Route path="/Product5" element={<Product5/>} />
     </Routes>
   </Router>
    </>
  )

}
export default App
