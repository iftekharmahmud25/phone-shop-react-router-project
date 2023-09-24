import React, { useEffect, useState } from 'react';
import PhoneCard from '../Phone/PhoneCard';
import FavoriteCard from './FavoriteCard/FavoriteCard';



const Favorites = () => {

    const [favorites, setFavorites] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow,setIsShow]  = useState(false)
    useEffect(() => {
        const favoriteItem = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteItem) {
            setFavorites(favoriteItem)
        }
        else {
            console.log('no data found')
            setNoFound('No Data Found')
        }
    }, [])
    

const handleRemove =() =>{
      localStorage.clear()
      setFavorites([]);
      setNoFound('No Data Found');
}



    return (
        <div>
            {noFound ? <p className='h-[40vh] flex justify-center items-end'>{noFound}</p>
                :

                <div>
                    { 
                       favorites.length > 0 && <button onClick={handleRemove}   className='px-3 block mx-auto rounded-sm bg-pink-500 text-black'>Delete All Favorite</button>
                     }
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                           {
                              isShow ? favorites.map ((phone) => (
                                   <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                              )) : favorites.slice(0,2).map ((phone) => (
                                <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
                           )) 
                           }
                      </div>
                   {
                     favorites.length > 2 &&    <button onClick={()=> setIsShow(!isShow)}   className='px-3 py-5 block mx-auto rounded-sm bg-pink-500 text-black'>{isShow ? 'Show Less' : 'Show More'}</button>
                   }

                </div>}

        </div>
    );
};

export default Favorites;