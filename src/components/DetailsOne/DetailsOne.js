import { Card } from 'flowbite-react';
import React from 'react';

const DetailsOne = ({ service }) => {
    console.log(service)
    const { name, image, description, price } = service.data;
    return (
        <div className="lg:w-2/4 mx-auto mt-5">
            <Card className=''>
                <div>
                    <img className='w-full' src={image} alt="" />
                </div>

                <div>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-4">
                        Price: {price}
                    </h4>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </Card>
        </div >
    );
};

export default DetailsOne;