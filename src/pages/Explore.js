import React from "react";
import "./Explore.css";
import { Carousel } from "antd";

function Explore() {
    return (
        <div className="Child">
            <section>
                <h1>Explore Component</h1>
            </section>
            <section className="carousel-container">
                <Carousel autoplay>
                    <div className="slide">
                        <h3>Group 1</h3>
                        <p>text text text text</p>
                    </div>
                    <div className="slide">
                        <h3>Group 2</h3>
                        <p>text text text text</p>
                    </div>
                    <div className="slide">
                        <h3>Group 3</h3>
                        <p>text text text text</p>
                    </div>
                    <div className="slide">
                        <h3>Group 4</h3>
                        <p>text text text text</p>
                    </div>
                </Carousel>
            </section>
        </div>
    );
}

export default Explore;
