import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = props => {

    function renderDashboard() {
        if(props.isLoggedIn == 'NOT_LOGGED_IN') {
            // Goes back to home
            props.history.push('/');
        } else {
            return (
                <div>
                    <div className='dashboard-header'>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className='dashboard-header-content'>
                                        <div className='avatar'>
                                            <img src={props.user.picture.data.url} alt={props.user.name}/>
                                        </div>
                                        <h2><strong>{props.user.name}</strong></h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {renderDashboard()}
        </div>
    );
}

export default Dashboard