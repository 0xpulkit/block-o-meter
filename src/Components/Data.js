import React from "react"

const Data = (props)=> {
    return(
        <div style={{
            flexDirection: "row"
        }}>
            <div class="alert alert-primary" role="alert">
                <h5> {props.title} </h5>
                <span>{props.data ? props.data : 'Data Unavailable'}</span>
            </div>
        </div>
    )

}
export default Data;