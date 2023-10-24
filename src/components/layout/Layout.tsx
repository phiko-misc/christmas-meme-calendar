import ThemeSwitch from "@components/button/ThemeButton";
import Snow from "../snow";

interface Props {
  children: JSX.Element;
}

/**
 * Layout Used before all other things can load
 * @param props
 */
export default function Layout(props: Props) {
  return (
    <>
      <div className="h-full w-full bg-white dark:bg-black">
        <div className="flex h-full w-full flex-row">
          <ThemeSwitch />
          <div id="layout" className="z-10 h-full w-full overflow-x-hidden">
            {props.children}
          </div>
        </div>
        <Snow />
      </div>
    </>
  );
}
