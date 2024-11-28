import React from "react"
import ChildComponents from "./ChildComponents"

const ParentComponents = () => {
    const Cars= [
    {
    imagePath: "/images/corolla.jpg",
    carName: "Toyota Corolla",
    price: "59.7-75.5 Lacs",
    rating:"626 Reviews"
    },
    
   {
    imagePath: "/images/alto.jpg",
    carName: "Suzuki Alto",
    price: "23.3-30.5 Lacs",
    rating: "202 Reviews"
   },
    
   {    
    imagePath: "/images/city.jpeg",
    carName: "Honda City",
    price: "46.5-58.5 Lacs",
    rating: "457 Reviews"
   },

   {
    imagePath: "/images/civic.jpg",
    carName: "Honda Civic",
    price: "86.6-99.0 Lacs",
    rating: "363 Reviews"
   },
]
    return(
        <div>
        <h1 className="text-5xl text-center font-bold underline font-serif mt-10 lg:text-center">Car ShowCase</h1>
        
        <div className="lg:flex lg:justify-center lg:mt-40 lg:gap-4">

            
            {Cars.map((vehicle) => {
                  return(
                   
                  <div className="flex justify-center my-2">

                    <div className="border border-gray-400 lg:h-64 lg:w-5/6 rounded-md">
                    <ChildComponents 
                    imagePath={vehicle.imagePath}
                    carName={vehicle.carName}
                    carPrice={vehicle.price}
                    carReviews={vehicle.rating}
                    />
                    </div>
                    </div>
                  )
                })
            }
        </div>
        </div>
    )
}
export default ParentComponents
