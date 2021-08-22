import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Carousel, CarouselItem, CarouselCaption } from 'reactstrap';
import {Link } from 'react-router-dom';



// function RenderCarousel({availableitem}) {
//     return  (
    
//         <Carousel>
//             <CarouselItem>
//                 <img width={900} height={600} src={availableitem.image} alt={availableitem.name} alt='First slide'/>{'>'}
//                     <CarouselCaption>
//                         <h3>src={availableitem.description}</h3>
//                             <button>Shop Now</button>
//                     </CarouselCaption>
//             </CarouselItem>
//         </Carousel>
//     )
// }

function RenderCard({availableitem}) {
    return (
        <Card className="col">
        <Link to={`/shop/${availableitem.id}`}>
        <CardImg src={availableitem.image} alt={availableitem.name} />
            <CardBody>
                <CardTitle>{availableitem.name}</CardTitle>
            </CardBody>
         </Link>
        </Card>
    );
}



function Home(props) {
    return (
        <React.Fragment>
        <div className="container">
            <div className="row contact-content">
            <div className="col-md center ">
                    <h3><strong>Vintage and Repurposed</strong></h3>
                    <p>We find and reimagine quality furniture and other items</p>
            </div>
        </div>
            <div className="container">
                <div className="col-md m-1">
                    {/* <RenderCarousel /> */}
                    <RenderCard availableitem={props.availableitem} />
                </div>
            </div>
        </div>
           <div class="container">
           <div class="row contact-content">
               <div class="col align-self-center pl-5">
                   <h3>Subscribe to Our Newsletter</h3>
                   <p class="d-none d-sm-block">Sign up to receive our newsletter which will keep you up to date on new
                       items added to the store as well as bring you new blog posts!</p>
                   <label class="btn btn-dark btn-md" id="subscribeButton"> Subscribe</label>
               </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Home;   