import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "black" | "link" | "selected" | "red";
type ColorScheme = "green" | "blue" | "red"; // Added red to ColorScheme
type ButtonSize = "regular" | "small";

interface Props<C extends React.ElementType = "button"> {
    children?: React.ReactNode;
    as?: C;
    variant?: ButtonVariant;
    colorScheme?: ColorScheme;
    additional?: string;
    icon?: React.ElementType;
    size?: ButtonSize;
    rounded?: boolean;
    fontSize?: string[];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    [key: string]: any;
}

const Button = <C extends React.ElementType = "button">({
    children,
    as,
    variant = "primary",
    colorScheme = "green",
    additional,
    icon,
    size = "regular",
    rounded = false,
    fontSize = ["xl", "xl"],
    onClick,
    type = "button",
    ...restProps
}: Props<C>) => {

    const Component = as || "button";
    const ButtonIcon = icon;

    let backgroundColor = "bg-green-500";
    let color = "text-white";
    let hoverBackgroundColor = "hover:bg-green-700";
    let hoverTextColor = "hover:text-white";
    let height = "min-h-10";
    let borderColor = "border-transparent";
    let textTransform = "uppercase";
    let fontWeight = "font-bold";
    let padding = "px-6 py-2";
    let shadow = "shadow-md";

    switch (variant) {
        case "secondary":
            backgroundColor = "bg-transparent";
            color = colorScheme === "green" ? "text-green-500" : colorScheme === "blue" ? "text-blue-500" : "text-red-500";
            borderColor = `border-${colorScheme}-500`;
            textTransform = "";
            fontWeight = "";
            break;
        case "tertiary":
            backgroundColor = "bg-transparent";
            color = colorScheme === "green" ? "text-green-500" : colorScheme === "blue" ? "text-blue-500" : "text-red-500";
            break;
        case "black":
            backgroundColor = "bg-black";
            color = "text-white";
            break;
        case "link":
            backgroundColor = "bg-transparent";
            hoverBackgroundColor = "hover:transparent";
            hoverTextColor = colorScheme === "green" ? "hover:text-green-500" : colorScheme === "blue" ? "hover:text-blue-500" : "hover:text-red-500";
            padding = "";
            shadow = "";
            height = "h-auto";
            break;
        case "selected":
            backgroundColor = colorScheme === "green" ? "bg-green-600" : colorScheme === "blue" ? "bg-blue-600" : "bg-red-600";
            textTransform = "";
            fontWeight = "";
            break;
        case "red":
            backgroundColor = "bg-red-500";
            color = "text-white";
            hoverBackgroundColor = "hover:bg-red-700";
            break;
    }

    switch (size) {
        case "small":
            fontSize = ["md", "md"];
            height = "h-8";
            break;
    }

    const textSize =
        typeof fontSize === "string"
            ? `text-${fontSize}`
            : `text-${fontSize[0]} ${fontSize.length > 1 ? `md:text-${fontSize[1]}` : ""}`;

    const bgColor =
        variant === "primary"
            ? colorScheme === "green"
                ? `bg-green-500 hover:bg-green-700 focus:outline-none focus:border-green-700`
                : colorScheme === "blue"
                ? `bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700`
                : colorScheme === "red"
                ? `bg-red-500 hover:bg-red-700 focus:outline-none focus:border-red-700`
                : `bg-green-500 hover:bg-green-700 focus:outline-none focus:border-green-700`
            : `bg-transparent border-${colorScheme}-500 hover:border-${colorScheme}-700`;

    return (
        <Component
            {...restProps}
            onClick={onClick}
            type={type}
            className={`${bgColor} ${color} ${textTransform} ${fontWeight} flex duration-300 items-center ${rounded ? "rounded-md" : ""
                } border ${borderColor} ${padding} ${height} ${textSize} font-bold ${shadow}
      justify-center items-center cursor-pointer focus:outline-none disabled:pointer-events-none`}
        >
            {children}
            {ButtonIcon && <ButtonIcon className="ml-2 h-6 w-6"></ButtonIcon>}
        </Component>
    );
};

export default Button;