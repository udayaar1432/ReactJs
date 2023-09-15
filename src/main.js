import img1 from "./images/html-editor-.png"
import img2 from "./images/CSS-Logo.png"
import img3 from "./images/OIP (1).jpg"
import img4 from "./images/OIP (2).jpg"

const Login = () => {
    return (
        <div className="login">
            <form >
                <h3>you want loan just login</h3>
                <div >
                    <input className="input" type="email" placeholder="Email address" required />
                </div>
                <div >
                    <input className="input" type="password" placeholder="Password" required />
                </div>
                <button className="button">submit</button>
            </form>
            <p> forgot your email or password </p>
        </div>
    )
}

const Icons = () => {
    return (

        <div >
            <img className="imag" src={img1} alt="nature" />
            <img className="imag" src={img2} alt="nature" />
            <img className="imag" src={img3} alt="nature" />
            <img className="imag" src={img4} alt="nature" />
        </div>
    )
}



const Result = () => (
    <div>
        <Login />
        <Icons />
    </div>
)
export default Result;