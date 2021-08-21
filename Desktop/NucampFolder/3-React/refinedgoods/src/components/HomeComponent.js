import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

// function RenderCard({availableitem}) {
//     return (
//         <Card>
//             <CardImg src={availableitem.image} alt={availableitem.name} />
//             <CardBody>
//                 <CardTitle>{availableitem.name}</CardTitle>
//                 <CardText>{availableitem.description}</CardText>
//             </CardBody>
//         </Card>
//     );
// }

function RenderSelectedAvailableitem(availableitem) {
    if (availableitem) {
        return (
            <div className="col-md-5 m-1">
                <Card onClick={() => this.props.onClick(availableitem.id)}>
                    <CardImg top src={availableitem.image} alt={availableitem.name} />
                    <CardBody>
                        <CardTitle>{availableitem.name}</CardTitle>
                        <CardText>{availableitem.description}</CardText>
                        <CardTitle>{availableitem.price}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
    return <div />;
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderSelectedAvailableitem availableitem={props.availableitem} />
                    {/* <RenderCard availableitem={props.availableitem} /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;   