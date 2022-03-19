import "./portfolio.css"

const Portfolio = () => {
    return ( 
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Porfolio</h2>
            <div className="container portfolio__container">
                {[1,2,3,4,5,6].map((project)=>{
                    return(
                        <article className="portfolio__item">
                            <div className="portfolio__item-image"></div>
                                <h3>This is a portfolio item title</h3>
                                <div className="portfolio__item-cta">
                                    <a href="https://github.com" className="btn">Github</a>
                                    <a href="https://github.com" className="btn btn-primary">Live Demo</a>
                                </div>
                        </article>
                    );
                })}
                
            </div>
        </section>
    );
}

export default Portfolio;