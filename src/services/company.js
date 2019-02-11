import { makeApiRequest } from 'services/base';

/**
 * Utility function to send the company PATCH request to the server.
 * @param {string} address - address to send in the update request.
 * @param {string} city - city to send in the update request.
 * @param {string} state - state to send in the update request.
 * @param {string} links - links to send in the update request.
 */
export function makeUpdateRequest(address, city, state, links, logo, companyId) {
    const formData = new FormData();
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('links', links);

    if (logo) {
        formData.append('logo', logo);
    }

    return makeApiRequest('update-company/' + companyId.toString() + '/', 'PATCH', formData, null);
}

export function makeFetchRequest() {
    return makeApiRequest('employee/my-company/', 'GET');
}
