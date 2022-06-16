import React from 'react'

function DownloadAds() {
    return (
        <div className="download">
            <div className="download_images">

                <img
                    src={require("../img/App Store.png")}
                    alt=""
                />
                
                <img
                    src={require("../img/Google Play.png")}
                    alt=""
                />

            </div>
        </div>
    )
}

export default DownloadAds