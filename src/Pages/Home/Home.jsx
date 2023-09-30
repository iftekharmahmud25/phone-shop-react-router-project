import { useLoaderData } from "react-router-dom";
import Banner from "../../Componants/Header/Banner/Banner";
import Phones from "../../Componants/Phones/Phones";
import { Helmet } from "react-helmet-async";


const Home = () => {
   const phones = useLoaderData();
   
    
    return (
        <div>
            <Helmet>
                 <title>Phone Shop | Home</title>
            </Helmet>
           <Banner></Banner>
           <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;