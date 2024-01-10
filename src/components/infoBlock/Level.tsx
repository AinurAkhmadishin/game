import React from "react";
import {useAppSelector} from "../../hooks/useAppSelector";

export default () => {
    const {level} = useAppSelector((store) => store.rootReducer.levelSlice);
    return(
        <div>Сложность: {level}</div>
    )
}
