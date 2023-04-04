export default function parseSpreadValue(value) {
  return (value > 0 ? "+" : "") + value + "bp";
}
