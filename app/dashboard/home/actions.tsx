import Text from "@/components/text";
import Link from "next/link";

export interface Action {
    title: string;
    quantity: number;
    linkTo: string;
};

const Actions = () => {

    const actions: Action[] = [
        {
            title: 'Carbon Credits',
            quantity: 4,
            linkTo: '#'
        },
        {
            title: 'New Emmissions',
            quantity: 18,
            linkTo: '#'
        },
        {
            title: 'Approved Emmissions',
            quantity: 10,
            linkTo: '#'
        }
    ]
    return (
        <div>
            <Text variant="title2" color='light-green' additional="my-8">
                Actions
            </Text>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
                {actions.map((action, index) => (
                    <CardDataActions
                        key={index}
                        title={action.title}
                        quantity={action.quantity}
                        linkTo={action.linkTo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Actions

const CardDataActions: React.FC<Action> = ({ title, quantity, linkTo }) => {

    return (
        <div className='rounded-2xl shadow-md p-4 border-1'>
            <div className='text-[48px] text-red-500 font-bold text-center'>
                {quantity}
            </div>
            <div className='text-lg text-center text-primary font-semibold pt-2 pb-4'>
                {title}
            </div>
            <Link
                className='italic flex justify-center text-md text-center text-orange-400 cursor-pointer hover:text-secondary py-2'
                href={linkTo}
            >
                Act on it
            </Link>
        </div>
    )
}
