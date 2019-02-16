import ApiConstants from 'constants/api';
import { showToast } from 'utils/helpers/toast';
import store from '../store';

/**
 * @function apiErrorHandler
 * @param  {type} response {response object}
 * @param  {type} body     {response body}
 */
function apiErrorHandler(response, body) {
    body = body || { detail: 'Error occur' };
    if (response.status >= 500) {
        showToast('server error occur');
        let errormsg = body.detail;
        if (errormsg instanceof Array) {
            errormsg = errormsg.join(';');
        }
        showToast(errormsg);
        return null;
    }
    if (response.status >= 400) {
        showToast('request error');
        let errormsg = body.detail;
        if (errormsg instanceof Array) {
            errormsg = errormsg.join(';');
        }
        showToast(errormsg);
        return null;
    }
    return null;
}

/**
 * service function to make an api call to the server.
 * @param {string} url - url string to send the request to.
 * @param {string} method - request type to send.
 * @param {object} data - data to send in case of POST request
 * @param {string} token - token of the user to send
 */
export function makeApiRequest(url, method = 'GET', data = undefined, contentType = 'application/json') {
    url = ApiConstants.API_URL + url;
    const token = store.getState().currentUser.token ? `Token ${store.getState().currentUser.token}` : '';

    let body;
    if (data) {
        body = data;
    }

    const headers = {
        Authorization: token,
    };
    if (contentType === 'application/json') {
        headers['content-type'] = contentType;
        body = JSON.stringify(body);
    }

    return fetch(url, {
        // optional fetch options
        method,
        body, // you may send any data, encoded as you wish. shall match content-type
        headers,
        mode: 'cors', // no-cors, cors, *same-origin
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response
            .json()
            .then(body => ({ response, body }))
            .catch(err => ({ response, body: null })))
        .then(({ response, body }) => {
            if (response.status >= 405) {
                apiErrorHandler(response, body);
            }
            return { response, body };
        })
        .catch(err => {
            showToast(String(err));
            return null;
        });
}
