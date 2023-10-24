import ChevronRightIcon from "@components/icons/ChevronRightIcon";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    link?: string;
    className?: string;
    disabled?: boolean;
}

export default function SimpleButton(props: Props) {
    return (
        <button disabled={props.disabled} className={clsx(
            "disabled:brightness-75 h-32 w-32 lg:h-44 lg:w-44 bg-gradient-to-r from-rose-700 to-rose-900 rounded-full shadow-lg",
            props.className && props.className
        )}>
            {
                props.disabled
                    ?
                    <div className='w-full flex place-content-center'>
                        {props.icon}
                    </div>
                    :
                    <Link href={props.link ?? ""} className='w-full flex place-content-center'>
                        {props.icon}
                    </Link>
            }

        </button>
    )
}