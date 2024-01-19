/**
 * @param {string} id
 * @param {string} placeholder 
 * @param {number} value 
 * @param {n : number} onChange
 * @param {string} label 
 */
export function Input ({id, placeholder, value, onChange, label}) {
    return <div>
            <label className="floatingInput">{label}</label>
            <input
                id={id}
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
}