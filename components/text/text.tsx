import React from 'react';

type TextProps<C extends React.ElementType = 'p'> = {
    children: React.ReactNode;
    as?: C;
    color?: 'dark-green' | 'light-green' | 'grey';
    weight?: 'normal' | 'bold';
    size?: 'sm' | 'md' | 'lg';
    additional?: string;
    variant?: 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'link';
} & React.ComponentPropsWithoutRef<C>;

const Text = <C extends React.ElementType = 'p'>({
    children,
    as,
    color = 'grey',
    weight = 'normal',
    size = 'md',
    additional,
    variant = 'body1',
    ...restProps
}: TextProps<C>) => {

    // Transform `as` prop into a component
    const Component = as || 'p';

    // Format text size
    const textSize = `text-${size}`;

    // Format text weight
    const textWeight = `font-${weight}`;

    // Setup color classes
    const textColor = {
        'dark-green': 'text-green-800',
        'light-green': 'text-green-400',
        'grey': 'text-gray-600',
    }[color] || 'text-gray-600';

    // Setup variants
    let classes;
    switch (variant) {
        case 'title1':
            classes = 'text-5xl font-bold';
            break;
        case 'title2':
            classes = 'text-4xl font-bold';
            break;
        case 'body1':
            classes = 'text-lg';
            break;
        case 'body2':
            classes = 'text-sm';
            break;
        case 'label1':
            classes = 'text-md';
            break;
        case 'link':
            classes = 'text-xs';
            break;
        default:
            classes = `${textSize} ${textWeight}`;
            break;
    }

    return (
        <Component
            {...restProps}
            className={`${classes} ${textColor} ${additional || ''}`}
        >
            {children}
        </Component>
    );
}

export default Text;