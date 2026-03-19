import React from 'react';
import { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise)
    return (
        <>
            <h1 className='text-4xl text-center font-medium'>Our Services</h1>
        
            <div className='m-10 grid md:grid-cols-3 gap-4'> 
                {pricingData.map((pricing)=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)}
            </div>
        </>
    );
};

export default PricingOptions;