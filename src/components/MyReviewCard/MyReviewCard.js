import { Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ myAllReview, handleDelete }) => {
    const { userName, userEmail, _id, photo, review, serviceName } = myAllReview




    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img className="mb-3 w-12 rounded-full shadow-lg" src={photo} alt="" />
                </Table.Cell>
                <Table.Cell>
                    {serviceName}
                </Table.Cell>
                <Table.Cell>
                    {userName}
                </Table.Cell>
                <Table.Cell>
                    {userEmail}
                </Table.Cell>
                <Table.Cell>
                    {review.slice(0, 30)}......
                </Table.Cell>
                <Table.Cell>
                    <Link className='font-medium text-blue-600 hover:underline dark:text-blue-500' to={`/editreview/${_id}`}>Edit</Link>
                </Table.Cell>
                <Table.Cell>
                    <button className='font-medium text-blue-600 hover:underline dark:text-blue-500' onClick={() => handleDelete(_id)} color="light border-none">Delete</button>
                </Table.Cell>
            </Table.Row>

        </>
    );
};

export default MyReviewCard;



