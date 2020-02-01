import React from 'react'

export default function Input(props) {

    return (
        <>
            <label className={props.classLabel}>
                {props.label}
            </label>
            <input
                type={props.type || 'text'}
                id={props.id}
                className={props.classInput}
                placeholder={props.placeholder}
                autoComplete='off'
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
        </>
    )
}