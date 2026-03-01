import Hex from "./Hex";

function LearningMap(props: { hexCount: number }) {
    return (
        <div>
            <h2>Learning Map</h2>
            <p>This is a visual representation of the learning path.</p>
            {Array.from({ length: props.hexCount }).map((_, i) => (
          <Hex key={i} size={100} fill="rgba(53, 53, 172, 1)" title={`Hexagon ${i + 1}`} />
        ))}
        </div>
    );
}

export default LearningMap;
