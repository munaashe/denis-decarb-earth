import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { code } = await request.json();

        //a delay of 3 seconds (3000 milliseconds)
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Dummy check for the code (you can replace this with real logic)
        if (code === '12345') {
            return NextResponse.json({ message: 'Verification successful' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Invalid code' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error verifying code:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}