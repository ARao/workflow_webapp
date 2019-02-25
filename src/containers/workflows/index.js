import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import _ from 'lodash';

import ApiConstants from 'constants/api';
import taskConstants from 'constants/task';
import WorkflowCard from 'components/workflowCard';

import { getAllWorkflows } from 'services/workflow';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { parseDateTime } from 'utils/helpers';

export class Workflows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.createWorkFlowButton = this.createWorkFlowButton.bind(this);
    }

    componentWillMount() {
        getAllWorkflows();
    }

    createWorkFlowButton() {
        const { currentUser } = this.props;
        if (currentUser.isAdmin) {
            return (
                <React.Fragment>
                    <LinkContainer to={ApiConstants.TEMPLATES_PAGE}>
                        <Button variant="primary">
                            {'New Workflow'}
                        </Button>
                    </LinkContainer>
                </React.Fragment>
            );
        }
        return <></>;
    }

    render() {
        const { workflows } = this.props;
        return (
            <Container>
                <Row>
                    {this.createWorkFlowButton()}
                </Row>
                <Row className="pt-2">
                    {Object.keys(workflows).map(wfid => {
                        const workflow = workflows[wfid];
                        return (
                            <WorkflowCard key={`${Math.random()}-workflow`} wfid={wfid} workflow={workflow} />
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

Workflows.propTypes = {
    currentUser: PropTypes.object.isRequired,
    workflows: PropTypes.object.isRequired,
};

Workflows.defaultProps = {};

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    workflows: state.workflows,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workflows);
