

const Header = () => {
    return (
        <header>
            <div >
                <h1 className="h1">Welcome React bank</h1>

                <select id="option">
                    <option value="personal react loan">personal react loan</option>
                    <option value={"Home react loan"}>Home react loan</option>
                    <option value={"vehical react loan"}>vehical react loan</option>
                    <option value={"gold react loan"}>gold react loan</option>
                    <option value={"property react loan"}>property react loan</option>
                </select>

            </div>
        </header>
    )
}




export default Header;