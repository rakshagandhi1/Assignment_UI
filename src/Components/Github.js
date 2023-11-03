import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState(0);
    // useEffect(() => {        
    //     console.log('use effect');
    //   fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    //     return response.json();
    //    }).then(result => 
    //     // setData(result)
    //    console.log(result)
    //    )
    // },[])
    return(
        <><div className="d-flex align-items-center justify-content-start text-center m-10 p-5 bg-gray-400 align-middle"><h1 className="text-center font-bold text-2xl p-4 text-uppercase bg-gray-400 text-white align-middle order-2">Github Followers - {data.followers ? data.followers : ''} </h1>
        <img src={data.avatar_url ? data.avatar_url : ''} className="text-center order-1" width={200}/>
        </div>
        </>
    )
}

export const githubInfoLoader = async() => {
 const response = await fetch('https://api.github.com/users/hiteshchoudhary');
 return response.json();
}