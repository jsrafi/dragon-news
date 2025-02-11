import swimming from "../../../assets/swimming.png"
import play from "../../../assets/playground.png"
import classes from "../../../assets/class.png"

const QZone = () => {
    return (
        <div className="bg-gray-200 my-5">
            <h1 className="font-bold  text-xl mb-3 p-5">Q-Zone</h1>
            <div className="flex flex-col gap-10  pb-5 px-2">

                <img src={swimming} alt="" />
                <img src={play} alt="" />
                <img src={classes} alt="" />

            </div>
        </div>
    );
};

export default QZone;