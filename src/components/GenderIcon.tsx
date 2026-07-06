import type {JSX} from 'react';
import type {IconType} from "react-icons";

interface GenderIconProps {
    // Props here
    icon: IconType | null;
    text: string
}

function GenderIcon({icon: Icon, text}: GenderIconProps): JSX.Element {
    return (
        <p className="flex gap-1 items-center">
            {Icon && <Icon size={8}/>}
            <span>{text}</span>
        </p>
    );
}

export default GenderIcon;