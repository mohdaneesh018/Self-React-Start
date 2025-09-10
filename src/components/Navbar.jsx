import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const router = useNavigate()
    function redirecttoLogin() {
        router("/login")
    }
    function redirecttohome() {
        router("/")
    }

    return (
        <div>
            <button onClick={redirecttohome}>Home</button>
            <button onClick={() => router("/register")}>Register</button>
            <button onClick={redirecttoLogin}>Login</button>
        </div>
    )
}

export default Navbar
