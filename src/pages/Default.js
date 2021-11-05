import React from "react";
import { Switch, Route } from "react-router-dom";

//screens
import Home from './Home';
import Card from './Card';
import Login from './Login';

class Default extends React.Component {
    render(){
        return(
            <div>
                <header>Tangor</header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/card" component={Card} />
                        <Route path="/login" component={Login} />
                        <Route render={() => <p>not found!.</p>} />
                    </Switch>
                </main>
                <footer className="copylight">© 2021 Y.Kosuke</footer>
            </div>
        );
    }
}

export default Default