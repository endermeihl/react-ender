/**
 * Created by ender on 2017/8/26.
 */
import {Router, Route, hashHistory} from 'react-router';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
), document.getElementById('app'));