import React from 'react';
import care from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ExceptionCare = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={care} alt ='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Extra Care</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionCare;