import React, { Component} from 'react';
import Shop from './ShopComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        availableitems: state.availableitems,
        blogitems: state.blogitems,
    }
}

class Main extends Component {


    render() {

        const HomePage = () => {
            return (
                <Home
                    availableitem={this.props.availableitems.filter(availableitem => availableitem.featured)[0]}
                    blogitem={this.props.blogitems.filter(blogitem => blogitem.featured)[0]}
                />
            );
        };

        const Blog = ({match}) => {
            return (
                <Blog 
                    availableitem={this.props.availableitems.filter(availableitem => availableitem.id === +match.params.availableitemId)[0]}
                    blogitem={this.props.blogitem.filter(blogitem => blogitem.availableitemId === +match.params.availableitemId)}
                />
            );
        }
            return (
                <div>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/aboutus' render={() => <About aboutus={this.props.aboutus} />} />
                        <Route exact path='/shop' render={() => <Shop availableitems={this.props.availableitems} />} />
                        <Route path='/shop/:blog' component={Blog} />
                        <Redirect to='/homepage' />
                    </Switch>
                    <Footer />
                </div>
            );
        };
    }

export default withRouter(mapStateToProps)(Main);