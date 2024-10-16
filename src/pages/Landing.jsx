import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/TodoCointainer";
import Apps from "../assests/time";
function Landing() {
    const data = useLocation();

    return (
        <>
            <div
                className="bg-black min-h-screen flex items-center justify-center relative"
                style={{
                    backgroundImage: "url(https://media.istockphoto.com/id/1553163779/video/abstract-slow-animated-color-gradients-background.jpg?b=1&s=640x640&k=20&c=AOPD_ObHKiwBgiKTWB3hJJG8xj8LAX-lsE2l7IMbwAI=)", // Replace with your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-[#EFEFEF] p-10 border rounded-lg shadow-lg transition-transform transform hover:scale-105 md:w-3/4 lg:w-1/2">
                    <Header name={data.state.user} />
                    <div className="flex justify-between gap-7 my-5 flex-wrap">
                        <Card
                            bgColor="#8272DA"
                            title={<span className="text-3xl font-bold italic">48 °C</span>}
                            subtitle={<span className="text-lg font-light">Chennai</span>}
                        />
                        <Card
                            bgColor="#FD6663"
                            title={<span className="text-3xl font-bold italic">October</span>}
                            subtitle={<Apps />}
                        />
                        <Card
                            bgColor="#FCA201"
                            title={<span className="text-3xl font-bold italic">Build Using</span>}
                            subtitle={<span className="text-lg font-light">React</span>}
                        />
                    </div>

                    <TodoContainer />
                </div>
            </div>
        </>
    );
}

export default Landing;
