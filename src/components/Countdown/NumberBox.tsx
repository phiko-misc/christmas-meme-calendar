interface Props {
  num: string | number;
  unit: string;
}

/**
 * NumberBox component used for display numbers in the countdown
 * @param {string | number} num The number you wish to be displayed
 * @param {string} unit The unit you wish to be displayed. Can fx. be "Days".
 *
 * ```js
 * // Can be used like this:
 * <NumberBox num={24} unit="Days"/>
 * ```
 */
export default function NumberBox(props: Props) {
  return (
    <div className="mt-4 flex flex-col items-center px-2" data-cy-numberbox={props.unit}>
      <div className=" relative mt-4 flex h-32 w-32 flex-col items-center justify-center rounded-lg bg-transparent text-2xl md:text-4xl ">
        <div className="h-full w-full rounded-b-lg rounded-t-lg bg-[#343650]" />

        <div
          className={`font-mono absolute z-10 font-redhat text-5xl font-bold text-rose-500 md:text-7xl`}
        >
          {props.num}
        </div>

        <div className=" h-full w-full rounded-b-lg rounded-t-lg bg-[#2c2e3f]" />

        <div className={`z-5 absolute top-0 h-1/2 w-full rounded-t-lg`} />
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] h-[12px] w-[12px] rounded-full bg-[#1e1f29]" />
        <div className="absolute -left-1 top-[60px] h-[12px] w-[12px] rounded-full bg-[#1e1f29]" />
      </div>
      <p className="mt-3 text-lg font-semibold text-black dark:text-rose-200 md:text-2xl select-none">
        {props.unit}
      </p>
    </div>
  );
}
