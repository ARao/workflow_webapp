import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormField from 'components/formField';
import FormSubmitButton from 'components/formSubmitButton';
import { CLIENT_RENEG_LIMIT } from 'tls';

/**
 * Class component for login form
 */
export class CompanyForm extends React.Component {
    /**
     * Constructor for the component.
     * @param {object} props - props object for the component.
     */
    constructor(props) {
        super(props);
        const { name, address, city, state, status, links } = this.props;

        const linksObj = {};
        for (const link of links) {
            linksObj[link.link_type] = link.url;
        }

        this.state = { name, address, city, state, status, linksObj };

        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * Function to submit the company form.
     * @param {string} address - address of the compnay.
     * @param {string} city - city of the company.
     * @param {string} state - state of the company.
     * @param {string} links - links of the company.
     */
    submitForm = (address, city, state, linksObj) => ev => {
        const { onSubmit } = this.props;
        ev.preventDefault();
        const links = [];

        Object.entries(linksObj).forEach(([linkType, url]) => {
            links.push({ link_type: linkType, url });
        });

        onSubmit(address, city, state, links);
    };

    /**
     * Function to return the component rendering.
     */
    render() {
        const { name, address, city, state, status, linksObj } = this.state;
        const { isAdmin } = this.props;

        return (
            <div>
                <form method="post" onSubmit={this.submitForm(address, city, state, linksObj)}>
                    <fieldset disabled={!isAdmin ? 'disabled' : ''}>
                        {/* name */}
                        <FormField
                            name="Name"
                            inputName="name"
                            type="text"
                            placeholder="eg. ABC"
                            value={name}
                            disabled="disabled"
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        {/* address */}
                        <FormField
                            name="Address"
                            inputName="address"
                            type="text"
                            placeholder="eg. Gurgaon"
                            value={address}
                            onChange={e => this.setState({ address: e.target.value })}
                        />
                        {/* city */}
                        <FormField
                            name="City"
                            inputName="city"
                            type="text"
                            placeholder="eg. New Delhi"
                            value={city}
                            onChange={e => this.setState({ city: e.target.value })}
                        />
                        {/* state */}
                        <FormField
                            name="State"
                            inputName="state"
                            type="text"
                            placeholder="eg. Delhi"
                            value={state}
                            onChange={e => this.setState({ state: e.target.value })}
                        />
                        {/* status */}
                        <FormField
                            name="Status"
                            inputName="status"
                            type="text"
                            placeholder="eg. user@example.com"
                            value={status}
                            disabled="disabled"
                            onChange={e => this.setState({ status: e.target.value })}
                        />
                        {/* links */}
                        {Object.entries(linksObj).map(([linkType, url]) => (
                            <FormField
                                name={linkType}
                                inputName={linkType}
                                type="text"
                                placeholder="eg. https://github.com/abc"
                                value={url}
                                onChange={e => {
                                    const stateUpdate = { linksObj: {} };
                                    stateUpdate.linksObj[linkType] = e.target.value;
                                    this.setState(stateUpdate);
                                }}
                                key={linkType}
                            />
                        ))}
                        {/* profile photo */}
                        {/* <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose file
                            </label>
                        </div>
                    </div> */}
                        {/* update profile button */}
                        <FormSubmitButton name="Update" />
                    </fieldset>
                </form>
            </div>
        );
    }
}

CompanyForm.propTypes = {
    isAdmin: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
};

CompanyForm.defaultProps = {
    isAdmin: false,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyForm);
