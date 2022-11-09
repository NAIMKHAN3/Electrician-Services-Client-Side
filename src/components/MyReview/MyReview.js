import { Spinner, Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import { AuthContext } from '../UserContext/UserContext';

const MyReview = () => {
    const { user } = useContext(AuthContext)

    const [myAllReviews, setMyAllReviews] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAllReviews(data.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [user])
    return (
        <>
            {
                loading && <div className="text-center">
                    <Spinner
                        aria-label="Extra large spinner example"
                        size="xl"
                    />
                </div>
            }
            <div className='lg:w-2/3 mx-auto'>
                {
                    myAllReviews.length ?
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>
                                    User Photo
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    User Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    User Email
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Review
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">
                                        Edit
                                    </span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    myAllReviews.map(myAllReview => <MyReviewCard key={myAllReview._id} myAllReview={myAllReview}></MyReviewCard>)
                                }
                            </Table.Body>
                        </Table>
                        : !loading && <h1 className='text-3xl text-center font-bold'>No review Founds</h1>
                }

            </div>
        </>
    );
};

export default MyReview;

