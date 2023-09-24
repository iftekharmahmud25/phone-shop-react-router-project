

const Banner = () => {
    const images = 'https://i.ibb.co/wcZZcH0/i-Phone-15-Mockup-all-colors-2.jpg';
    
    return (
        <div className ="h-[70vh] mt-10 md:mt-0 lg:mt-0 ">
             <img className="lg:w-[100%] lg:h-[400px] w-[100%] h-[250px]" src={images} alt="" />
             
        </div>
    );
};

export default Banner;