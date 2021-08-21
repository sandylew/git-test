import React, { Component} from 'react';
import Home from './HomeComponent';
import Shop from './ShopComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AVAILABLEITEMS } from '../shared/availableitems';

// const mapStateToProps = state => {
//     return {
//         availableitems: state.availableitems,
//         // blogitems: state.blogitems,
//     }
// }

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        availableitems: AVAILABLEITEMS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Shop />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/shop' render={() => <Shop availableitems={this.state.availableitems}/>} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About}/>
                    <Redirect to='/home' />

                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;