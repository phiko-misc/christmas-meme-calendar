interface IconProps {
  className?: string;
}

/**
 * Can be found on heroicons via Outline and the name "chevron-left"
 * @param {IconProps} props
 * @link https://heroicons.com/
 * @returns Chevron Left Icon
 */
export default function ChevronLeftIcon(props: IconProps) {
  return (
    <div className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
}
