import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@components/Icons/SunIcon";
import { MoonIcon } from "@components/Icons/MoonIcon";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button
      onClick={switchTheme}
      className="ml-3 mt-3 h-fit w-fit text-black dark:text-white"
      data-cy-switchtheme
    >
      {theme === "light" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="dark:text-coolGray-390 h-5 w-5" />
      )}
    </button>
  );
}
