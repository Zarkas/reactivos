var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReacRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
        	<Router>
	            <div className='container'>
	                <Route path="/popular" component={Popular} />
	            </div>
        	</Router>
        )
    }
}

module.export = App;