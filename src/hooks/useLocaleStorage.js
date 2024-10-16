import {useEffect} from "react";
import {GAME_KEY} from "../consts/consts";

const useLocaleStorage = () => {

    useEffect(() => {
        if(!localStorage.getItem(GAME_KEY)) {
            localStorage.setItem(GAME_KEY, JSON.stringify({
              step: 0,
              result: [],
            }
            ))
        }
    }, [])

}

export default useLocaleStorage