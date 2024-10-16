import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();

    const [euser, seteuser] = useState("");
    const [epass, setepass] = useState("");
    const [ruser, setruser] = useState(true);

    const user = props.user;

    function handleUinput(evt) {
        seteuser(evt.target.value);
    }

    function handleUpassword(evt) {
        setepass(evt.target.value);
    }

    function Checkuser() {
        let userfound = false;
        user.forEach(function (item) {
            if (euser === item.username && epass === item.password) {
                userfound = true;
                navigate("/Landing", { state: { user: euser } });
            }
            if (!userfound) {
                setruser(false);
            }
        });
    }

    return (
        <div
                className="bg-black min-h-screen flex items-center justify-center relative"
                style={{
                    backgroundImage: "url('https://storage.devdevout.com/media/3d-scan-css-animated-background.jpg')", // Replace with your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            <div className="bg-[#EFEFEF] p-10 border rounded-md shadow-lg transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl font-bold italic text-violet-600">Hey Buddy</h1>
                {ruser ? (
                    <p className="text-lg italic text-gray-700">
                        I help you manage your activities after you login :)
                    </p>
                ) : (
                    <p className="text-red-600 font-semibold">Please sign up before your login...</p>
                )}
                <div className="my-2 gap-2 flex flex-col">
                    <input
                        onChange={handleUinput}
                        placeholder="username"
                        type="text"
                        className="w-52 bg-transparent border border-black rounded-md p-1 transition duration-300 focus:border-violet-500 focus:outline-none"
                    />
                    <input
                        onChange={handleUpassword}
                        placeholder="password"
                        type="password"
                        className="w-52 bg-transparent border border-black rounded-md p-1 transition duration-300 focus:border-violet-500 focus:outline-none"
                    />
                    <button
                        onClick={Checkuser}
                        className="w-24 bg-violet-600 border rounded-md p-1 transition duration-300 transform hover:scale-110"
                    >
                        Login
                    </button>
                    <p className="mt-2">
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="underline text-violet-600 hover:text-violet-800 transition duration-200">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
