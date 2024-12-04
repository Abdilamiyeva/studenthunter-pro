export enum EndpointNameAuth {
  GET_CURRENT_USER = '/auth/me',
  LOGIN_USER = '/auth/login',
  SIGN_UP_USER = '/auth/sign-up',
  EMAIL_VERIFICATION = '/auth/email-verify',
  REFRESH_TOKEN = '/auth/refres-token',
  UPDATE_PASSWORD = '/auth/update-password',
  SEND_LINK_TO_RESET_PASSWORD = '/auth/reset-password-send-link',
  RESET_PASSWORD = '/auth/reset-password',
  SIGN_UP_ADMIN = '/auth/sign-up-admin',
  BECOME_A_MEMBER = '/auth/become-member',
  CONFIRM_MEMBER = '/auth/confirm-member',
  REJECT_MEMBER = '/auth/reject-member',
}

export enum EndpointNameUpload {
  UPLOAD_IMAGE = '/upload/image',
  UPLOAD_VIDEO = '/upload/video',
  UPLOAD_PDF = '/upload/pdf',
}

export enum EndpointNameBlogs {
  GET_BLOGS = '/blog/all',
  GET_BLOG = '/blog/get/',
  CREATE_BLOG = '/blog/add',
  UPDATE_BLOG = '/blog/edit/',
  CHANGE_BLOG_STATUS = '/blog/status/',
  DELETE_BLOG = '/blog/delete/',
}

export enum EndpointNameCompany {
  GET_COMPANIES = '/company/all',
  GET_PUBLIC_COMPANY = '/company/get/',
  GET_COMPANY_USERS = '/company/users',
  COMPANY = '/company/',
  CREATE_COMPANY = '/company/add',
  MANAGE_USER = '/company/manage-user',
  SAVE_COMPANY = '/company/like',
  UNSAVE_COMPANY = '/company/unlike',
}

export enum EndpointNameUniversity {
  GET_PUBLIC_UNIVERSITIES = '/university/public/all',
  GET_UNIVERSITY = '/university/get/',
  GET_ADMIN_DASHBOARD_UNIVERSITIES = '/university/all',
  GET_UNIVERSITY_SAVED_USER = '/university/saved-users/',
  GET_UNIVERSITY_APPLIED_USER = '/university/applied-users/',
  CREATE_UNIVERSITY = '/university/add',
  UPDATE_UNIVERSITY = '/university/edit/',
  CHANGE_UNIVERSITY_STATUS = '/university/status/',
  CHANGE_UNIVERSITY_CONTRACT = '/university/contract/',
  CHANGE_UNIVERSITY_MANAGED_USER_STATUS = '/university/managed-student',
  DELETE_UNIVERSITY = '/university/delete/',
  LIKE_UNIVERSITY = '/company/like',
  GET_UNIVERSITY_FACULTY = '/university-faculty/all',
}

export enum EndpointNameFaculty {
  GET_PUBLIC_FACULTIES = '/university-faculty/public/all',
  GET_FACULTY = '/university-faculty/get/',
  GET_FACULTIES = '/university-faculty/all',
  CREATE_FACULTY = '/university-faculty/add',
  UPDATE_FACULTY = '/university-faculty/edit/',
  CHANGE_FACULTY_STATUS = '/university-faculty/status/',
  DELETE_FACULTY = '/university-faculty/delete/',
}

export enum EndpointNameVacancy {
  GET_PUBLIC_VACANCIES = '/vacancy/public',
  GET_DASHBOARD_VACANCIES = '/vacancy/all',
  GET_VACANCY_APPLICANTS = '/vacancy/users',
  CREATE_VACANCY = '/vacancy/add',
  LIKE_VACANCY = '/vacancy/like',
  UNLIKE_VACANCY = '/vacancy/unlike',
  APPLY_VACANCY = '/vacancy/apply',
  WITHDRAW_VACANCY = '/vacancy/withdraw',
  VACANCY = '/vacancy/',
}

export enum EndpointNameApplicant {
  GET_APPLICANTS = '/applicant/all',
  GET_APPLICANT = '/applicant/get/',
  CHANGE_APPLICANT_STATUS = '/applicant/status/',
  DELETE_APPLICANT = '/applicant/delete/',
  GET_APPLIED_UNIVERSITY = '/applicant/applied-university/',
  LIKE_UNIVERSITY = '/applicant/liked-university/',
  APPLY_PROGRAM = '/applicant/apply-program',
  UPDATE_APPLICANT = '/applicant/edit/',
  ADD_SIGNATURE = '/applicant/signature/',
  CREATE_CER = '/applicant/add-cer',
  UPDATE_CER = '/applicant/edit-cer',
  DELETE_CER = '/applicant/delete-cer',
  CREATE_ACHIVEMENT = '/applicant/add-achivement',
  UPDATE_ACHIVEMENT = '/applicant/edit-achivement',
  DELETE_ACHIVEMENT = '/applicant/delete-achivement',
  CREATE_OTHER_CER = '/applicant/add-other-cer',
  UPDATE_OTHER_CER = '/applicant/edit-other-cer',
  DELETE_OTHER_CER = '/applicant/delete-other-cer',
  CREATE_EXPERIENCE = '/applicant/add-experience',
  UPDATE_EXPERIENCE = '/applicant/edit-experience',
  DELETE_EXPERIENCE = '/applicant/delete-experience',
  CREATE_EDUCATION = '/applicant/add-education',
  UPDATE_EDUCATION = '/applicant/edit-education',
  DELETE_EDUCATION = '/applicant/delete-education',
}

export enum EndpointNameJobs {
  GET_ALL_PUBLIC_JOBS = '/vacancy/public',
  GET_JOB = '/vacancy/',
  APPLY_JOB = '/vacancy/apply',
  LIKE_JOB = '/vacancy/like',
  UN_LIKE_JOB = '/vacancy/unlike',
}

export enum EndpointNamePrograms {
  GET_PROGRAMS = '/university-faculty/public/all',
  GET_PUBLIC_PROGRAM = '/university-faculty/get/',
  GET_UNIVERSITY_PROGRAM = '/university-faculty/all',
}

export interface GetHomePageSearchResponse {}
export interface GetHomePageSearchRequset {
  q: string
}

export enum EndpointNameSkill {
  GET_PUBLIC_SKILLS = '/skill/public/all',
  GET_SKILLS = '/skill/all',
  GET_SKILLS_FILTER_LIST = '/skill/filter-list',
  GET_SKILL_DETAILS = '/skill/get/',
  DELETE_SKILL = '/skill/delete/',
  CREATE_SKILL = '/skill/add',
  UPDATE_SKILL = '/skill/edit/',
  UPDATE_SKILL_BUYING_COUNT = '/skill/buying-count/',
  CREATE_SKILL_CATEGORY = '/skill/add-category',
  DELETE_SKILL_CATEGORY = '/skill/remove-category/',
  GET_SKILL_CATEGORIES = '/skill/all-category',
}

export enum EndpointNameConsulting {
  CREATE_CONSULTING = '/consulting/add',
  GET_CONSULTINGS = '/consulting/all',
  CONSULTING = '/consulting/',
}

export enum EndpointNameHomePage {
  GET_HOME_PAGE = '/homepage/get',
  UPDATE_UNIVERSITIES = '/homepage/university',
  UPDATE_VACANCIES = '/homepage/vacancies',
  GET_FEEDBACKS = '/feedback/all',
  CREATE_FEEDBACK = '/feedback/add',
  UPDATE_FEEDBACK = '/feedback/edit/',
  DELETE_FEEDBACK = '/feedback/delete/',
  GET_FAQS = '/faq/all',
  CREATE_FAQ = '/faq/add',
  UPDATE_FAQ = '/faq/edit/',
  DELETE_FAQ = '/faq/delete/',
  GET_HIGHLIGHTS = '/instagram-highlight/all',
  CREATE_HIGHLIGHT = '/instagram-highlight/add',
  UPDATE_HIGHLIGHT = '/instagram-highlight/edit/',
  DELETE_HIGHLIGHT = '/instagram-highlight/delete/',
  GET_HOME_PAGE_SEARCH = '/homepage/search',
}
