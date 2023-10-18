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
            <div className="bg-white dark:bg-black h-full w-full">
                <div className="flex flex-row h-full w-full">
                    <ThemeSwitch />
                    <div id="layout" className="h-full w-full overflow-x-hidden z-10">
                        {props.children}
                    </div>
                </div>
                <Snow />
            </div>
        </>
    );
}