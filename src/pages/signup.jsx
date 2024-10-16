import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const [euser, seteuser] = useState("");
    const [epass, setepass] = useState("");
    const user = props.user;
    const setuser = props.setuser;
    const navigate = useNavigate();

    function handleUinput(evt) {
        seteuser(evt.target.value);
    }

    function handleUpassword(evt) {
        setepass(evt.target.value);
    }

    function handleSavelogin() {
        setuser([...user, { username: euser, password: epass }]);
        navigate('/');
    }

    return (
        <div 
            className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center" 
            style={{ backgroundImage: "url(https://thumbs.dreamstime.com/b/aesthetic-psychedelic-iridescent-shiny-holographic-vaporwave-texture-k-seamless-vj-loop-motion-background-animation-looping-204771073.jpg)" }}
        >
            <div className="bg-gradient-to-br from-purple-900 to-blue-100 p-8 border rounded-lg shadow-lg max-w-md w-full transition-transform transform hover:scale-105">
                <h1 className="text-4xl font-extrabold text-center text-white mb-6">Create Account</h1>
                <p className="text-center text-gray-700 mb-4">Join us and manage your activities effortlessly!</p>
                <div className="flex flex-col gap-4">
                    <input 
                        onChange={handleUinput} 
                        placeholder="Username" 
                        type="text" 
                        className="w-full bg-white border border-gray-300 rounded-md p-2 transition duration-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <input 
                        onChange={handleUpassword} 
                        placeholder="Password" 
                        type="password" 
                        className="w-full bg-white border border-gray-300 rounded-md p-2 transition duration-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <input 
                        placeholder="Confirm Password" 
                        type="password" 
                        className="w-full bg-white border border-gray-300 rounded-md p-2 transition duration-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <button 
                        onClick={handleSavelogin} 
                        className="w-full bg-black text-white font-semibold rounded-md p-2 transition duration-300 transform hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                    <p className="text-center text-gray-600">
                        Already have an account? 
                        <Link to="/" className="underline text-black hover:text-blue-800"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
