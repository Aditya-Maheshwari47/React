import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {/* outputing list dynamically using Array */}
            {CORE_CONCEPTS.map((conceptId) => (
                <CoreConcept key={conceptId.title}{...conceptId} />
            ))}
            </ul>
        </section>
    );
}