import React from 'react';
import {Row,Container,Col, FormLabel, Table} from 'react-bootstrap';


function PerformanceComponent(props){
    return(
        <Container>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <h2>Compare Potential Companies</h2>
                    <h2 className="text-muted">Make Smart Investment Decision</h2>
                    <Row className="d-flex p-3">
                        <FormLabel>
                            Select Company 1
                            <br/>
                            <input type="text"/>
                        </FormLabel>
                        <FormLabel className="ml-auto">
                            Select Company 2
                            <br/>
                            <input type="text"/>
                        </FormLabel>
                    </Row>
                    <Row className="d-flex p-3">
                        <FormLabel>
                            From Date
                            <br/>
                            <input type="text"/>
                        </FormLabel>
                        <FormLabel className="ml-auto">
                            To Date
                            <br/>
                            <input type="text"/>
                        </FormLabel>
                    </Row>
                    <button className="btn-primary">Fetch Details</button>
                    
                    <Table className="mt-3">
                        <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Stock Price</th>
                        </tr>
                        <tr>
                        <td>Date</td>
                        <td>Company</td>
                        <td>Stock Price</td>
                        </tr>
                        <tr>
                        <td>Date</td>
                        <td>Company</td>
                        <td>Stock Price</td>
                        </tr>
                        <tr>
                        <td>Date</td>
                        <td>Company</td>
                        <td>Stock Price</td>
                        </tr>
                    </Table>
                </Col>

                <Col lg={3}></Col>
            </Row>
        </Container>
    )
} 

export default PerformanceComponent
