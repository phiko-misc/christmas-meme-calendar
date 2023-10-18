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
        <div className="dark:bg-black h-full w-screen">
            <div className="flex flex-row h-full w-screen">
                <div id="layout" className="h-full w-screen overflow-x-hidden z-10">
                    {props.children}
                </div>
            </div>
            <Snow />
        </div>
    );
}