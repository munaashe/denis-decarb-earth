'use client'

import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/button';
import InputField from '@/components/input-field';
import Text from '@/components/text';
import { useRouter } from 'next/navigation';

const VerifyEmail = () => {
    const [code, setCode] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false); // Add loading state
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        const numericValue = value.replace(/[^0-9]/g, '');
        setCode(numericValue);
        setError('');
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (code.length !== 5) {
            setError("Please enter a 5-digit code.");
            return;
        }

        setLoading(true); // Set loading to true when starting request

        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            if (!response.ok) {
                throw new Error("Verification failed");
            }

            const result = await response.json();
            console.log(result.message);

            // Redirect to the next page upon successful verification
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError("Verification failed. Please try again.");
        } finally {
            setLoading(false); // Set loading to false when request completes
        }
    };

    const handleCancel = () => {
        router.push('/');
    };

    return (
        <div className='flex items-center justify-center h-screen bg-green-100 p-4'>
            <div className='bg-green-700 p-8 md:p-12 min-w-[355px] rounded-xl'>
                <Text variant='title2' weight='bold' color='dark-green' additional='pb-8 !text-green-100'>
                    Verify Your Email
                </Text>
                <form onSubmit={handleVerify} className='flex flex-col gap-1'>
                    <InputField
                        label="Enter Verification Code"
                        type="string"
                        name="code"
                        value={code}
                        onChange={handleInputChange}
                        required
                        maxLength={5}
                        error={error}
                    />
                    <div className='flex gap-4 w-full justify-center items-center pt-4'>
                        <Button variant='primary' colorScheme='red' onClick={handleCancel} additional='!w-96'>
                            Cancel
                        </Button>
                        <Button variant='primary' type='submit' additional='!w-96'>
                            {loading ? "Verifying..." : "Verify"}
                        </Button>
                    </div>
                </form>
                {error && <p className="text-red-600">{error}</p>}
            </div>
        </div>
    );
};

export default VerifyEmail;