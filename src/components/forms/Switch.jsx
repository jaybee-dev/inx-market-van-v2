export default function Switch() {
  return (
    <div className="relative w-20">
      <label className="absolute w-full h-10 rounded">
        <input 
        type="checkbox"
        className="absolute hidden"
        role="switch"
      />
      <span className="absolute w-full h-full rounded"></span>
      </label>
    </div>
  );
}
