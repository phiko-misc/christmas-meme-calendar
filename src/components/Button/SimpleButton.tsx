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
    <button
      disabled={props.disabled}
      className={clsx(
        "h-32 w-32 rounded-full bg-gradient-to-r from-rose-700 to-rose-900 shadow-lg disabled:brightness-75 lg:h-44 lg:w-44",
        props.className && props.className,
      )}
      data-cy-simplebutton
    >
      {props.disabled ? (
        <div className="flex w-full place-content-center">{props.icon}</div>
      ) : (
        <Link
          href={props.link ?? ""}
          className="flex w-full place-content-center"
        >
          {props.icon}
        </Link>
      )}
    </button>
  );
}
