import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams();
    return(
        <><h1 className="text-center font-bold text-xl p-10 text-uppercase bg-gray-400 text-white align-middle">User Component - {id}</h1></>
    )
}