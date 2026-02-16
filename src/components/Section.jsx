export default function Section({title,children,...props}){
    // ...props collects everything else (id, className, etc.)
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}

        </section>
    )

}