import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-10">
                    <LatestNews></LatestNews>
                </section>
            </header>
        </div>
    );
};

export default HomeLayout;