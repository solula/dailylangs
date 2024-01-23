interface IconProps {
    className?: string;
}

const IconComponent: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            className={className}
        >
            <path
                d="M0.893285 16.9608C0.217188 20.1575 3.45149 22.7724 6.4357 21.4417L18.5443 16.0425C21.2726 14.826 21.7531 11.1568 19.4302 9.27869L10.0649 1.70699C7.7419 -0.171097 4.25471 1.06731 3.6366 3.98987L0.893285 16.9608Z"
                fill="#C9FF50"
            />
        </svg>
    );
};

export default IconComponent;
