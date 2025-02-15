import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import RIghtMain from "../Components/Main-Components/RIghtMain";
import go from "../assets/Vector (2).png"


const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const data = newsDetails.data[0];
    const { category_id, details, image_url, title } = data;
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Navbar></Navbar>


            <div className="grid grid-cols-12 gap-8 mt-10">
                <div className="card bg-base-100 w-full h-fit shadow-sm col-span-9">
                    <figure className="px-8 pt-8">
                        <img
                            src={image_url}
                            alt={title}
                            className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-3xl ">{title}</h2>
                        <p className="text-justify mt-2">{details}</p>
                        <div className="card-actions">
                            <Link to={`/category/${category_id}`} className="btn btn-secondary mt-2"> <img src={go} alt="" /> All News In This Category</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <RIghtMain></RIghtMain>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;