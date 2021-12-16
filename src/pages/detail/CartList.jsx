import React, {useState, useEffect} from 'react'
import tmdbApi from '../../api/tmdbApi'
import { useParams } from 'react-router';
import apiConfig from '../../api/apiConfig';
import './cart-list.scss'

const CartList = (props) => {
    const [casts, setCasts] = useState([]);
    const {category} = useParams();
    useEffect(()=>{
        const getCredits = async() => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5))
        }
        
        getCredits()

    }, [category, props.id])
    return (
        <div className='casts'>
            {casts.map((item, i) => (
                <div className='casts__item' key={i}>
                    <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}>
                        <p className='casts__item_name'>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartList
