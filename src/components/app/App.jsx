import styles from './app.module.scss';
import Home from "../home/Home";
import {useStartStore} from "../../store/startStore";
import GameBoard from "../gameBoard/GameBoard";
import useLocaleStorage from "../../hooks/useLocaleStorage";
import YandexSDK from "../../YandexSDK";
import {useState} from "react";
import './aaa.css';

function App({ ysdk }) {
    const {isStart } = useStartStore();
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    useLocaleStorage()

    const preventContextMenu = (event) => {
        event.preventDefault();
    }
  return (
          <div className={styles.app} onContextMenu={preventContextMenu}>
              {!isStart ? <Home/> : <GameBoard ysdk={ysdk}/>}
          </div>

      // <div className={`block ${isFlipped ? 'flipped' : ''}`}>
      //     <div className="block-inner front">
      //         <button onClick={handleFlip}>{isFlipped ? 'a' : 'f'}</button>
      //     </div>
      //     <div className="block-inner back">
      //         <button onClick={handleFlip}>{isFlipped ? 'a' : 'f'}</button>
      //     </div>
      // </div>
  );
}

const WrappedApp = () => (
    <YandexSDK>
        <App />
    </YandexSDK>
);

export default WrappedApp;
