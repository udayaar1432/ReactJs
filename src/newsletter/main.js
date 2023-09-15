import "./style.css";
import img1 from "../images/OIP (1).jpg"

const Heading = () => {
    return (
        <div className="heading ">
            <h1>Newsletter</h1>
            <h3 className="headingh2">CAREFREE</h3>
        </div>
    )
}

const Avathar = () => {
    return (
        <img src={img1} alt="girl"></img>
    )
}

const Content = () => {
    return (
        <div className="content">
            <h2>Our services</h2>
            <p>Props is a special keyword in React that stands for properties and is being
                used to pass data from one component to another and mostly from parent component
                to child component. We can say props is a data carrier or a means to transport data.
                I hope you are familiar with the JavaScript function. Most of the time, functions with parameters
                are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component.
                Let's see the difference between a function and a component.</p>
        </div>
    )
}


const Topic = () => {
    return (
        <div>
            <p>
                Props is a special keyword in React that stands for properties and is being
                used to pass data from one component to another
            </p>
        </div>
    )
}

const Subtopic1 = () => {
    return (
        <section className="subtopic">
            <div className="topic">
                <h4>Topic 1</h4>
                <Topic />
            </div>

            <div>
                <h4>Topic 2</h4>
                <Topic />
            </div>

            <div>
                <h4>Topic 3</h4>
                <Topic />
            </div>
        </section>
    )
}

const Output = () => (

    <div>
        <Heading />
        <Avathar />
        <Content />
        <Subtopic1 />
    </div>
)

export default Output;



// https://codesandbox.io/s/sparkling-moon-wcxl99?file=/src/Reviews.js/