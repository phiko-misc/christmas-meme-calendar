import { useEffect, useLayoutEffect, useState } from "react";
import Snowfall from "react-snowfall";

/**
 * Used for workaround the useLayoutEffect error
 */
function Child() {
        useLayoutEffect(() => {
                return
        });
        return <Snowfall snowflakeCount={373} />
}


/**
 * Snow component
 * @returns {JSX.Element} Html snow element 
 */
export default function Snow(): JSX.Element {
        const [showChild, setShowChild] = useState(false);

        // Wait until after client-side hydration to show
        useEffect(() => {
                setShowChild(true);
        }, []);

        if (!showChild) {
                // You can show some kind of placeholder UI here
                return <></>
        }

        return <Child />
}
