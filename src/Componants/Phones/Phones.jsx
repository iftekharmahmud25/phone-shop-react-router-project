import PhonesCard from "./PhonesCard";


const Phones = ({phones}) => {
    
    return (
        <div>
            <h1 className="text-xl text-center text-pink-500 md:py-10 lg:py-10 py-24 font-semibold">All Categories Phones </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {
                     phones?.map(phone => <PhonesCard key={phone.id} phone={phone} ></PhonesCard>)
                 }
            </div>
        </div>
    );
};

export default Phones;