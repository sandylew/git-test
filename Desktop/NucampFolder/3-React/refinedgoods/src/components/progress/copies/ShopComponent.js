import React, { Component }  from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAvailableItem:null
            
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
    

    render() {
        const shop = this.props.availableitems.map(availableitem => {
            return (

                <div key={availableitem.id} className="col-md-5 m-1">

            <div className="card-group col-sm-12 p-2" height="150px" max-height="auto">
                <div className="card">
                    <Card>
                        <CardImg width="100%" src={availableitem.image} alt={availableitem.name} />
                            <CardImgOverlay>
                                <CardTitle>{availableitem.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                    
                    <img src={availableitem.image} alt={availableitem.name} />
                    <h2>{availableitem.name}</h2>
                    <p>{availableitem.description}</p>
                    <h2>{availableitem.price}</h2>
                </div>
                </div>
                </div>
           
            );
        });

        return (
            <div className="container">
                <div className="row">
                <div className="col d-block p-4 m-2 text-center">
                <h2><strong>Available Items</strong></h2>
                    {shop}
                </div>
                </div>
            </div>
        );
    }
}

export default Shop;