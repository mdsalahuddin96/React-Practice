import React from "react";
import Features from "./Features";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { name, price, description, popular, features } = pricing;
  const badgeStyle={
    padding:'5px',
    borderRadius:'10px',
    backgroundColor:'orange',
    display:'inline-block',
    marginTop:'20px'
  }
  return (
      <div className="card bg-base-100 shadow-sm text-black flex flex-col">
        {/* card header */}
        <div className="space-y-3 px-3">
            {popular?<span style={badgeStyle}>Most Popular</span>:<span style={badgeStyle}>Popular</span>}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{name}</h1>
                <h3 className="text-xl font-semibold">${price}</h3>
            </div>
        </div>
        {/* card body */}
        <div className="bg-amber-100 space-y-3 px-3 mt-4 flex-1/2">
            <p>{description}</p>
            <Features features={features}></Features>
        </div>
        <div className="my-6 mx-3">
             <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
  );
};

export default PricingCard;
