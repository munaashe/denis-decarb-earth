'use client'


import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Button from '@/components/button';
import Text from '@/components/text';

const data = [
    { month: 'Jan', carbonCredits: 4000, pricePerTon: 32 },
    { month: 'Feb', carbonCredits: 3000, pricePerTon: 28 },
    { month: 'Mar', carbonCredits: 5000, pricePerTon: 35 },
    { month: 'Apr', carbonCredits: 4500, pricePerTon: 30 },
    { month: 'May', carbonCredits: 6000, pricePerTon: 38 },
    { month: 'Jun', carbonCredits: 7000, pricePerTon: 40 },
    { month: 'Jul', carbonCredits: 7500, pricePerTon: 42 },
    { month: 'Aug', carbonCredits: 8000, pricePerTon: 44 },
    { month: 'Sep', carbonCredits: 6700, pricePerTon: 37 },
    { month: 'Oct', carbonCredits: 5900, pricePerTon: 33 },
    { month: 'Nov', carbonCredits: 6100, pricePerTon: 36 },
    { month: 'Dec', carbonCredits: 7200, pricePerTon: 39 },
];

const Stats = () => {
    const [chartType, setChartType] = useState<'line' | 'bar'>('line');

    const toggleChart = () => {
        setChartType(chartType === 'line' ? 'bar' : 'line');
    };

    return (
        <div className='p-8 m-4 rounded-2xl bg-white min-h-[90vh]'>
            <div className='flex justify-between items-center w-full my-8'>
                <Text variant="title2" weight="bold" color="dark-green" additional=" text-green-700 whitespace-nowrap">
                    Carbon Credits Trading Stats (2023)
                </Text>
                <Button
                    variant="primary"
                    colorScheme="green"
                    onClick={toggleChart}
                    additional="rounded-lg"
                >
                    View as {chartType === 'line' ? 'Bar' : 'Line'} Chart
                </Button>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-100 ">

                <ResponsiveContainer width="100%" height={400}>
                    {chartType === 'line' ? (
                        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                            <XAxis dataKey="month" stroke="#333" />
                            <YAxis stroke="#333" />
                            <Tooltip />
                            <Line type="monotone" dataKey="carbonCredits" stroke="#30C2E3" strokeWidth={3} />
                            <Line type="monotone" dataKey="pricePerTon" stroke="#2d8659" strokeWidth={3} />
                        </LineChart>
                    ) : (
                        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                            <XAxis dataKey="month" stroke="#333" />
                            <YAxis stroke="#333" />
                            <Tooltip />
                            <Bar dataKey="carbonCredits" fill="#30C2E3" />
                            <Bar dataKey="pricePerTon" fill="#2d8659" />
                        </BarChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;