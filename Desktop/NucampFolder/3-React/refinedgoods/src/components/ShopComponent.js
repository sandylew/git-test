import React from 'react';
import { Card, CardText, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


    function RenderShopItem({availableitem}) {
    
        return (
            <div className= "row row-content">
                <div className="container">
                    <div className="col-md-12 m-1 ">
                    <Card>
                        <CardImg src={availableitem.image} alt={availableitem.name} />
                            <CardImgOverlay>
                                <CardTitle>{availableitem.name}</CardTitle>
                            </CardImgOverlay>
                                <CardText className="col-12">{availableitem.description}</CardText>
                                <CardTitle><strong>{availableitem.price}</strong></CardTitle>
                    </Card>
                    </div>
                </div>
            </div>
        );
    }

    
    function Shop(props) {
    
        const shop = props.availableitems.map(availableitem => {
            return (
                <div className= "container col-md m-1">
                    <div key={availableitem.id} >
                        <RenderShopItem availableitem={availableitem} />
                    </div>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {shop}
                </div>
            </div>
        );
    }
export default Shop;