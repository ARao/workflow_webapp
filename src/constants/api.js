import { FIELD_TYPE } from 'constants/navigation';

export default {
    API_URL: 'http://localhost:8000/api/',
    MEDIA_URL: 'http://localhost:8000/media/',

    // API_URL: 'http://192.168.1.61:8000/api/',
    // MEDIA_URL: 'http://192.168.1.61:8000/media/',

    api: {
        auth: {
            ACCEPT_INVITE: 'employee/invitation/',
            FORGOT_PASSWORD: 'auth/request-reset/',
            LOGIN: 'auth/login/',
            LOGOUT: 'auth/logout/',
            UPDATE_PASSWORD: 'auth/reset-password/',
            USER_COMPANY_SIGNUP: 'create-company/',
        },
        company: {
            FETCH: 'employee/my-company/',
            UPDATE: 'update-company/',
        },
        employee: {
            FETCH: 'employee-detail/',
            FETCH_ACTIVE: 'employees-admin/?status=2',
            FETCH_ACTIVE_ADMIN: 'employee/?status=2',
            FETCH_ALL: 'employees/',
            FETCH_ALL_ADMIN: 'employee/',
            INVITE: 'company/invite-employee/',
            INVITE_CSV: 'company/invite-employee-csv/',
            REMOVE: 'employee/',
            UPDATE: 'employee/',
        },
        task: {
            FETCH: 'task/',
        },
        template: {
            FETCH: 'workflow-templates/',
        },
        user: {
            CREATE_COMPANY: 'company/new-company/',
            FETCH: 'user/profile/',
            UPDATE: 'user/profile/',
        },
        workflow: {
            FETCH: 'workflow/',
        },
        report: {
            WORKFLOW: 'workflow-report/',
            EMPLOYEE: 'employee-report/',
            FAVOURITE_EMPLOYEES: 'favourite-employees/',
            IJL_EMPLOYEE: 'ijl-employees/',
        },
    },
    COMPANY_PAGE: `/${FIELD_TYPE.COMPANY}`,
    CREATE_COMPANY_PAGE: `/${FIELD_TYPE.CREATE_COMAPNY}`,
    DASHBOARD_PAGE: `/${FIELD_TYPE.DASHBOARD}`,
    EMPLOYEE_PAGE: '/employee',
    EMPLOYEE_REPORT_PAGE: '/report',
    EMPLOYEES_PAGE: `/${FIELD_TYPE.EMPLOYEES}`,
    FORGOT_PASSWORD_PAGE: '/forgot-password',
    HOME_PAGE: '/',
    INVITATION_PAGE: '/invitation',
    INVITE_PAGE: `/${FIELD_TYPE.INVITE}`,
    REPORTS_PAGE: `/${FIELD_TYPE.REPORTS}`,
    LOGIN_PAGE: '/login',
    LOGOUT_PAGE: `/${FIELD_TYPE.LOGOUT}`,
    NEW_WORKFLOW_PAGE: `/${FIELD_TYPE.WORKFLOWS}/new`,
    PROFILE_PAGE: `/${FIELD_TYPE.PROFILE}`,
    RESET_PASSWORD_PAGE: '/reset-password',
    SIGNUP_PAGE: '/signup',
    TASK_PAGE: '/task',
    TEMPLATES_PAGE: `/${FIELD_TYPE.WORKFLOWS}/${FIELD_TYPE.TEMPLATES}`,
    WORKFLOW_PAGE: '/workflow',
    WORKFLOW_REPORT_PAGE: '/report',
    WORKFLOWS_PAGE: `/${FIELD_TYPE.WORKFLOWS}`,
};
