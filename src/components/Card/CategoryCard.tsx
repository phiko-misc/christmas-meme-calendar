interface Props {
    icon?: JSX.Element;
    text: string | undefined;
    className?: string;
}

/**
 * ProfileCard used when you need a card with a icon.
 * @property {JSX.Element} icon - All the icons can be finde in /components/icons. Input need to be a normal html element.
 * @property {string} text - The text that is on the right side of the icon
 * @returns A card with the icon and the text (normal used for profiles)
 */
export default function CategoryCard(props: Props) {
    return (
        <section className={`flex w-full justify-center ${props.className}`}>
            <div className="flex bg-gradient-to-r from-rose-700 to-rose-900 py-4 px-6 dark:bg-trueGray-900 gap-4 rounded-lg " >
                {props.icon}
                <p className={`text-lg`}>{props.text}</p>
            </div>
        </section>
    );

}