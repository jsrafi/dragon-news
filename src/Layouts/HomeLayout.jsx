import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import LeftMain from "../Components/Main-Components/LeftMain";
import RIghtMain from "../Components/Main-Components/RIghtMain";
import Navbar from "../Components/Navbar/Navbar";


const HomeLayout = () => {
    return (
        <div>
            {/* head section */}
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-10">
                    <LatestNews></LatestNews>
                </section>
            </header>

            {/* nav section */}
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            {/* main section */}
            <main className="w-11/12 mx-auto mt-10 grid md:grid-cols-12 gap-5">
                <div className="col-span-3">
                    <LeftMain></LeftMain>
                </div>
                <div className="col-span-6"><Outlet></Outlet></div>
                <div className="col-span-3">
                    <RIghtMain></RIghtMain>
                </div>
            </main>
        </div>
    );
};

export default HomeLayout;