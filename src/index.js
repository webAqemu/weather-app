import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';

// dev only
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
