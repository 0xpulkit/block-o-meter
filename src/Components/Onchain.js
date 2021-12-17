import React from "react"
import Data from "./Data"
const Onchain=(props) => {
    if (!props.data) return null;
    return(
        <div class="accordion" id="accordionExample">
            {/* <Data title="Price" data={props.data.data.market_data.price_usd}/> */}
            <Data title="Price" data={props.data.data.all_time_high.price}/>
            <Data title="" data=""/>
            <Data title="" data=""/>
            <Data title="" data=""/>
            <Data title="" data=""/>
            <Data title="" data=""/>
</div>
    )
}

export default Onchain