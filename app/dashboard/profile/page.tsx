'use client'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { Dialog } from '@headlessui/react';
import Text from '@/components/text';
import Button from '@/components/button';
import InputField from '@/components/input-field';
import { updateUserData } from '@/redux/slices/userSlice';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
    });

    const dispatch = useDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateUserData(updatedUser));
        setIsModalOpen(false);
    };


    return (
        <div className='p-8 m-4 rounded-2xl bg-white min-h-[90vh]'>
            <Text variant="title2" weight="bold" color="dark-green" additional=" text-green-700 whitespace-nowrap py-8">
                Profile Information
            </Text>
            <div className='mt-4'>
                <div className='flex gap-8 justify-evenly w-full my-2 md:w-1/2'>
                    <Text variant='body1' additional='w-full text-left !font-bold' >First Name:</Text>
                    <Text variant='body1' additional='w-full text-left'> {user.firstName}</Text>
                </div>
                <div className='flex gap-8 justify-evenly w-full my-2 md:w-1/2'>
                    <Text variant='body1' additional='w-full text-left !font-bold' >Last Name:</Text>
                    <Text variant='body1' additional='w-full text-left'> {user.lastName}</Text>
                </div>
                <div className='flex gap-8 justify-evenly w-full my-2 md:w-1/2'>
                    <Text variant='body1' additional='w-full text-left !font-bold' >Entity Type:</Text>
                    <Text variant='body1' additional='w-full text-left'> {user.entityType}</Text>
                </div>
                <div className='flex gap-8 justify-evenly w-full my-2 mb-12 md:w-1/2'>
                    <Text variant='body1' additional='w-full text-left !font-bold' >Email:</Text>
                    <Text variant='body1' additional='w-full text-left'> {user.email}</Text>
                </div>
            </div>
            <Button onClick={() => setIsModalOpen(true)} additional='!my-8'>
                Update Info
            </Button>
            {/* Modal for updating profile info */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded p-6 max-w-md w-full">
                        <Dialog.Title>
                            <Text variant="title2" weight="bold" color="dark-green">Update Profile</Text>
                        </Dialog.Title>

                        <form onSubmit={handleSubmit} className='gap-4'>
                            <InputField
                                label="First Name"
                                type="text"
                                name="firstName"
                                value={updatedUser.firstName}
                                onChange={handleInputChange}
                            />
                            <InputField
                                label="Last Name"
                                type="text"
                                name="lastName"
                                value={updatedUser.lastName}
                                onChange={handleInputChange}
                            />
                            <Button
                                type='submit'
                                variant="primary"
                                additional="mt-4"
                            >
                                Save Changes
                            </Button>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Profile;