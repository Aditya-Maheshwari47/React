export default function TabButton({children, isSelected, ...props}){
    return (
        // 'wire up' the custom prop(onSelect) to a real browser event (onClick).
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    );
}