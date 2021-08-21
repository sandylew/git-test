import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Carousel, ImageSlide, Arrow, } from 'reactstrap';

    



    function RenderShopItem({availableitem}) {
    
        return (
            <div className= "row row-content">
                <div className="container">
                    <div className="col-md-12 m-1 ">
                    <Card>
                        <Link to={`/shop/${availableitem.id}`}>
                            <CardImg src={availableitem.image} alt={availableitem.name} />
                                <CardImgOverlay>
                                    <CardTitle>{availableitem.name}</CardTitle>
                                </CardImgOverlay>
                        </Link>
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
                    <RenderShopItem availableitem={availableitem} onClick={props.onClick} />
                </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {shop}
                </div>
            </div>
        );
    }
export default Shop;