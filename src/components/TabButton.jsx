
export default function TabButton({children, onSelect, isSelected}){
    return (
        // 'wire up' the custom prop(onSelect) to a real browser event (onClick).
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect} >{children}</button>
        </li>
    );
}