'use client'

import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/button';
import Dropdown from '@/components/dropdown';
import InputField from '@/components/input-field';
import Text from '@/components/text';
import { TEST_REGISTER_MUTATION } from '@/graphql/mutations';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { validateEmail } from '@/utils/email-validation';
import { validatePassword } from '@/utils/password-validation';


const SignUp = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        entityType: "ENTERPRISE",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [register, { loading, error: mutationError }] = useMutation(TEST_REGISTER_MUTATION);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let hasError = false;
        const newErrors: { [key: string]: string } = {};

        // Validation functions for each field
        const validateFields = () => {
            // Validate each field
            if (!formState.firstName) {
                newErrors.firstName = "First name is required";
                hasError = true;
            }
            if (!formState.lastName) {
                newErrors.lastName = "Last name is required";
                hasError = true;
            }
            if (!validateEmail(formState.email)) {
                newErrors.email = "Invalid email format";
                hasError = true;
            }
            const passwordError = validatePassword(formState.password);
            if (passwordError) {
                newErrors.password = passwordError;
                hasError = true;
            }
            if (formState.password !== formState.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
                hasError = true;
            }
        };

        validateFields();

        setErrors(newErrors);

        if (hasError) return;

        try {
            //registration not working. Need schema and auth
            /*await register({
                variables: {
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                    entityType: formState.entityType,
                    email: formState.email,
                    password: formState.password,
                },
            });*/
            router.push('/verify-email');
        } catch (err) {
            console.error(err);
            setErrors((prev) => ({
                ...prev,
                general: "Registration failed"
            }));
        }
    };

    return (
        <div className='flex items-center justify-center h-screen bg-green-100 p-4'>
            <div className='bg-green-700 p-8 md:p-12 min-w-[355px] rounded-xl'>
                <Text variant='title2' weight='bold' color='dark-green' additional='pb-8 !text-green-100'>
                    Sign up
                </Text>
                <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
                    <div className='flex gap-2 md:gap-4 flex-col md:flex-row'>
                        <InputField
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleInputChange}
                            required
                            error={errors.firstName}
                        />
                        <InputField
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleInputChange}
                            required
                            error={errors.lastName}
                        />
                    </div>
                    <Dropdown
                        label="Entity Type"
                        name="entityType"
                        options={["ENTERPRISE", "FINANCIER", "DEVELOPER"]}
                        value={formState.entityType}
                        onChange={(name, value) =>
                            setFormState((prevState) => ({ ...prevState, [name]: value }))
                        }
                    />
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        error={errors.email}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={handleInputChange}
                        required
                        error={errors.password}
                    />
                    <InputField
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formState.confirmPassword}
                        onChange={handleInputChange}
                        required
                        error={errors.confirmPassword}
                    />
                    {errors.general && <p className="text-red-600">{errors.general}</p>}
                    <div className='flex gap-4 w-full justify-center items-center pt-4'>
                        <Button variant='primary' onClick={() => router.push('/')} >
                            Back
                        </Button>
                        <Button variant='primary' type='submit' >
                            {loading ? "Registering..." : "Register"}
                        </Button>
                    </div>
                    {mutationError && <p className="text-red-600">{mutationError.message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;