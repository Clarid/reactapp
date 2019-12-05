import React from 'react'

export default (Component, className) => {
    return (props) => {
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )        
    }
}