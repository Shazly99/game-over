import React from 'react'
import { ListGroup } from 'react-bootstrap'

function ListMinSystem({minimum_system_requirements}) {
    console.log(minimum_system_requirements);
    return (
        <>
            <ListGroup variant="flush transparent" color='red'>
                <ListGroup.Item variant="transparent">
                <b>Graphics</b> : {minimum_system_requirements.graphics}
                </ListGroup.Item>
                <ListGroup.Item>
                <b>Memory</b> : {minimum_system_requirements.memory}
                </ListGroup.Item>
                <ListGroup.Item>
                    <b>Os</b> : {minimum_system_requirements.os}
                </ListGroup.Item>

                <ListGroup.Item>
                <b>Processor</b> : {minimum_system_requirements.processor}
                </ListGroup.Item>
                <ListGroup.Item>
                    <b>Storage</b> : {minimum_system_requirements.storage}
                </ListGroup.Item>
                
            </ListGroup>
        </>
    )
}

export default ListMinSystem