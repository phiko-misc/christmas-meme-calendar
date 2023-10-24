import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@components/icons/SunIcon';
import { MoonIcon } from '@components/icons/MoonIcon';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    function switchTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (

        <button onClick={switchTheme} className="w-fit h-fit text-black dark:text-white ml-3 mt-3" >
            {theme === "light"
                ?
                <SunIcon className='w-5 h-5' />
                :
                <MoonIcon className='w-5 h-5 dark:text-coolGray-390' />
            }
        </button>
    );
}