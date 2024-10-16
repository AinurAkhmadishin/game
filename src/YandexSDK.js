import React, { useEffect, useState } from 'react';

const YandexSDK = ({ children }) => {
    const [sdk, setSdk] = useState(null);

    useEffect(() => {
        if (window.YaGames && !sdk) {
            window.YaGames.init().then(ysdk => {
                ysdk.features.LoadingAPI?.ready();
                setSdk(ysdk);
            });
        }
    }, [sdk]);

    return sdk ? React.cloneElement(children, { ysdk: sdk }) : null;
};

export default YandexSDK;