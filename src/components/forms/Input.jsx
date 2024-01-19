/**
 * @param {string} id
 * @param {string} placeholder 
 * @param {number} value 
 * @param {(v: value) => void} onChange
 * @param {string} label 
 */
export function Input ({id, placeholder, defaultValue, onChange, label}) {
    return <div>
            <label className="floatingInput">{label}</label>
            <input
                id={id}
                type="text"
                className="form-control"
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
}