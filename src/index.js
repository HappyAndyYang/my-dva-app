import dva from 'dva';
import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';
import './index.css';
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/users').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
