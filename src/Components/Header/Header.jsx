import moment from "moment";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-2 my-5">
            <div>
                <img className="" src={logo} alt="" />
            </div>
            <p className="text-gray-400 text-lg">Journalism Without Fear or Favour</p>
            <p className="text-lg">{moment().format("dddd, MMMM Do YYYY.")}</p>
        </div>
    );
};

export default Header;