import React from 'react';
import mobile from "../images/image-mockups.png";
import Button from "./button";

const Hero = () => {
   return (
     <section className="hero">
       <div className="hero-center">
         <div className="hero-img">
         <div className="img-container">
             <img src={mobile} alt="mobile background"/>
         </div>
         </div>
         <div className="hero-text">
           <h2> Next generation digital banking</h2>
           <p>
             Take your financial life online. Your Easybank account will be a
             one-stop-shop for spending, saving, budgeting, investing, and much
             more.
           </p>
           <Button/>
         </div>
       </div>
     </section>
   );
}

export default Hero;
