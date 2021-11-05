import React from 'react';
import project1 from "../../assets/projects/portfolio-1.png";
import project2 from "../../assets/projects/portfolio-2.png";
import project3 from "../../assets/projects/portfolio-3.png";
import project4 from "../../assets/projects/portfolio-4.png";
import project5 from "../../assets/projects/portfolio-5.png";
import project6 from "../../assets/projects/portfolio-6.png";

function Portfolio() {
  return (
<section id="portfolio" class="section-portfolio">
        <div class="container">
            <div class="text-center">
                <h3 class="portfolio-title">Portfolio</h3>
            </div>
            <div class="row">
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project1} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Reading-Corner</h4>
                            <a href="https://reading-corner.herokuapp.com/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Reading-corner" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project2} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Create-A-Date</h4>
                            <a href="https://electrolion.github.io/Create-a-date/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Create-a-date" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project3} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Coding Quiz</h4>
                            <a href = "https://electrolion.github.io/Coding-Quiz/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Coding-Quiz" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project4} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Team Generator</h4>
                            <a href="https://github.com/Electrolion/TeamProfileGenerator" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-6">
                    <div class="portfolio-item">
                        <img src={project5} className="img-res"/>
                        <div class="portfolio-item-info">
                            <h4>Weather Dashboard</h4>
                            <a href="https://electrolion.github.io/Weather-Dashboard/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/Weather-Dashboard" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <div className="portfolio-item">
                        <img src={project6} className="img-res"/>
                        <div className="portfolio-item-info">
                            <h4>Note Taker</h4>
                            <a href="https://note-taker-app-100.herokuapp.com/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
                            <a href="https://github.com/Electrolion/note-taker" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;