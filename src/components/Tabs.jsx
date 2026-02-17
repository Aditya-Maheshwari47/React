export default function Tabs({children,buttons,ButtonsContainer = 'menu'}){
    // set menu as the deafult value using props 
    //ButtonsContainer --> more flexible to use dynamic wrapper menu/section
    return(
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}