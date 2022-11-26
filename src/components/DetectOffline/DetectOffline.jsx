import React from 'react'
import { Offline, Online } from "react-detect-offline";
import Icon from "../../constants/Icons";
function DetectOffline() {
    return (
        <div className='offiline shadow-lg'>
            <Offline>
                <h5><Icon.offline/> You are currently offline</h5>
            </Offline>
        </div>
    )
}

export default DetectOffline
