/**
 * @param {string} placeholder 
 * @param {number} value 
 * @param {event} onChange 
 */
export function Input ({placeholder, value, onChange, label}) {
    return <div>
            <label className="floatingInput">{label}</label>
            <input
                type="number"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
}