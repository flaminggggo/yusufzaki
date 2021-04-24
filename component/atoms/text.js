export default function test({
    value, color, margin, size, weight, height, padding
}){
    return(
        <p style={{color: color, margin: margin, padding: padding, fontSize: size, fontWeight: weight, lineHeight: height}}>{value}</p>
    );
}