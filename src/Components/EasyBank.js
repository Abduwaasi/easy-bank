import React from 'react';
import { easyBank} from "../data";

const EasyBank = () => {
    return (
      <section className="easy-bank">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="easy-center">
            
        {easyBank.map((item)=>{
            const {id,img,title,text}=item;
            return <article key={id}>
                <div className="easy-img">
                    <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </article>
        })}
        </div>
      </section>
    );
}

export default EasyBank;
