import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const router = useNavigate()
    function redirecttoLogin() {
        router("/login")
    }
    function redirecttoProfile() {
        router("/profile")
    }

    return (
        <div>
            <button onClick={() => router("/register")}>Register</button>
            <button onClick={redirecttoLogin}>Login</button>
            <button onClick={redirecttoProfile}>Profile</button>
        </div>
    )
}

export default Navbar
