const Login = () => {
    return (
        <div class="login">
            <form >
                <h3>you want loan just login</h3>
                <div >
                    <input class="input" type="email" placeholder="Email address" required />
                </div>
                <div >
                    <input class="input" type="password" placeholder="Password" required />
                </div>
                <button class="button">submit</button>
            </form>
            <p> forgot your email or password </p>
        </div>
    )
}

export default Login;