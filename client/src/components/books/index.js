import React from "react";
import { Col, Row } from "../Grid";
import { ListItem } from "../List";

export function Books({title, subtitle, author, link, description, image, Button}) {

    return(
        <ListItem>
            <Row>
                <Col size = "md-8"> <h3> {title}</h3>
                {subtitle && <h5>{subtitle}</h5>} </Col>
                <Col size = "md-4"> <a href = {link}> view link</a> <Button /> </Col>
                
            </Row>
            <Row>
                <Col size = "md-6">
                 <p> written by{author}</p>
                 
                </Col>
            </Row>
            <Row>
                <Col size = "md-4">
                    <img src = {image} alt= {title}/>
                </Col>
                <Col size = "md-4">
                <p>{description}</p>
                </Col>

            </Row>


        </ListItem>
    )
}
