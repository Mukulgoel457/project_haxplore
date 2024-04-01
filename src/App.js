//import { useEffect } from "react";
/* import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom"; */
/* import SignUp from "./pages/SignUpfront_end";


s */
//import SignUp from "./pages/ ";
import LoginPage from "./pages/login_integrate";
//import RegisterPage from "./pages/register";
import { Routes, Route } from 'react-router-dom';
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import Book from "./pages/Booking/book";
import SignUp from "./pages/SignUpfront_end";
import Invoice from "./pages/INVOICE";


const  App = ()=>{
 /*  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
 */
  return (

    // <SignUp/>
    // <RegisterPage/>
  // <LoginPage/>

    <Routes>
   <Route path='/' element={<LoginPage />} />
   <Route path='/register' element={<RegisterPage />} />
   <Route path='/home' element={<HomePage />} />
   <Route path='/bookingsystem' element={<Book />} />
   <Route path='/invoice' element={<Invoice />} />
   </Routes> 
  // <SignUp/>

//  <Book/>
  );
}
export default App;

/* 
<Router>
<Switch>
  <Route exact path="/" component={LoginPage} />


  </Switch>
 </Router> */

 //<Route path='/bookingpage' element={<Book />} />