export const LOGIN = `${process.env.REACT_APP_ENDPOINT}/accounts/api/login/`;
export const GET_ROLES = `${process.env.REACT_APP_ENDPOINT}/organization/api/get-member-roles`;
export const REGISTER = `${process.env.REACT_APP_ENDPOINT}/accounts/api/register/`;
export const VALIDATE_OTP = `${process.env.REACT_APP_ENDPOINT}/accounts/api/verify-email-otp/`;


// admin urls
export const INVITE_TEACHER = `${process.env.REACT_APP_ENDPOINT}/organization/api/invite/`;
export const LIST_TEACHER_INVITES = `${process.env.REACT_APP_ENDPOINT}/organization/api/list-invitations/`;
export const GET_INVITE_STATUS = `${process.env.REACT_APP_ENDPOINT}/organization/api/get-invitation-status-choices/`;
export const GET_INVITE_URL = `${process.env.REACT_APP_ENDPOINT}/organization/api/get-invitation/{invitation_id}/`;

//student urls
export const INVITE_STUDENT = `${process.env.REACT_APP_ENDPOINT}/organization/api/invite/`;
export const LIST_STUDENT_INVITES = `${process.env.REACT_APP_ENDPOINT}/organization/api/list-invitations/`;
export const GET_INVITE_STATUS_STUDENT = `${process.env.REACT_APP_ENDPOINT}/organization/api/get-invitation-status-choices/`;

