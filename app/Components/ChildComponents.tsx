import React from "react";
import Image from "next/image";


const ChildComponents = (props: any) => {
    return(
    <div className="w-[100%]">
        
        <div className="flex flex-col justify-center items-center text-center py-2">

        <Image src={props.imagePath} alt="Car_Image"
        width={230}
        height={210}
        />  
        <h3 className="text-blue-900 font-bold">{props.carName}</h3>
        <h3 className="text-green-600">Pkr:{props.carPrice}</h3>
        <p className="text-gray-600 ">{props.carReviews}</p>

    </div>
    </div>

    )
} 
export default ChildComponents



