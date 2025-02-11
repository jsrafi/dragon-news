import { useLoaderData } from "react-router-dom";
import SingleCategory from "./SingleCategory";



const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1 className="text-xl font-bold mb-5">Dragon News Home</h1>
            <div className="flex flex-col gap-8">
                {
                    
                    data.map(singleData => <SingleCategory key={singleData._id} news={singleData}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;