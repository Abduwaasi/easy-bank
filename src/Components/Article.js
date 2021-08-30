import React from 'react';
import {articles} from '../data';

const Article = () => {
   
    return (
        <section className="article">
            <h2>Latest Articles</h2>
            <div className="article-container">
                {articles.map((article)=>{
                     const {id,image,author,title,text} =article;
                    return <article className="article-card" key={id}>
                        <div className="img-container">
                            <img src={image} alt={author} />
                        </div>
                        <div className="article-text">
                            <p className="author">{author}</p>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Article;
