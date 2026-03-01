interface HexProps {
    size?: number; // pixel width/height of the SVG
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
    onClick?: () => void;
    title?: string;
}

function Hex({
    size = 100,
    fill = "rgba(53, 53, 172, 1)",
    title = "Hexagon",
    ...props
}: HexProps) {
    const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i);
    return `${size + size * Math.cos(angle)},${size + size * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg width={size * 2} height={size * 2}>
      <polygon points={points} fill="steelblue" />
      <foreignObject x={size * 0.5} y={size * 0.5} width={size} height={size}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "white", fontSize: 14 }}>
          {title}
        </div>
      </foreignObject>
    </svg>
  );
}
export default Hex;