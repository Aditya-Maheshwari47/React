
export default function TabButton({children, onSelect}){
    return (
        // 'wire up' the custom prop(onSelect) to a real browser event (onClick).
        <li onClick={onSelect} ><button>{children}</button></li>
    );
}