import React from 'react';


export default props => {
    const { input, icon, classes = '', type = "text", label, id, col = 's12', meta: { touched, error, warning }} = props;
    const {value} = input;
    return (
        <div className={`input-field col ${col}`}>
            {icon && <i className="material-icons prefix">{icon}</i>}
            <input autoComplete="off" spellCheck="false" autoCorrect="off" className={`input ${id} ${classes}`} type={type} {...input} id={id} />
            {touched && ((error && <label htmlFor={id}>{!value && label}</label>) || (warning && <label htmlFor={id}>{!value && label}</label>)) ||<label htmlFor={id}>{!value && label}</label>}
            {touched && ((error && <span className="red-text">{error}</span>) || (warning && <span className="red-text">{warning}</span>))}
        </div>
    )
}

