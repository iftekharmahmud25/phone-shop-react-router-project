import { useLoaderData } from "react-router-dom";
import Banner from "../../Componants/Header/Banner/Banner";
import Phones from "../../Componants/Phones/Phones";


const Home = () => {
   const phones = useLoaderData();
   
    
    return (
        <div>
           <Banner></Banner>
           <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;