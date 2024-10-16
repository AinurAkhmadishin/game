import styles from './app.module.scss';
import Home from "../home/Home";
import {useStartStore} from "../../store/startStore";
import GameBoard from "../gameBoard/GameBoard";
import useLocaleStorage from "../../hooks/useLocaleStorage";
import YandexSDK from "../../YandexSDK";

function App({ ysdk }) {
    const {isStart } = useStartStore();

    useLocaleStorage()

  return (
          <div className={styles.app}>
              {!isStart ? <Home/> : <GameBoard ysdk={ysdk}/>}
          </div>
  );
}

const WrappedApp = () => (
    <YandexSDK>
        <App />
    </YandexSDK>
);

export default WrappedApp;
