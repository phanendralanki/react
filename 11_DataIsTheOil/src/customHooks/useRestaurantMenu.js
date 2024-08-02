import React,{useEffect, useState} from 'react'
import { MENU_API } from "../utils/Constants";
const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    //fetch Data
    useEffect(()=>{
        fetchData();
    },[]); //we want to fetch only ones so []


    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu
