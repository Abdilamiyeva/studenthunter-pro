import {Navigate, Route, Routes} from 'react-router-dom'
import {NotFoundPage} from './components/pages'
import {
  AboutPage,
  BlogPage,
  BlogsPage,
  CVBuilderPage,
  CompanyPage,
  ContactPage,
  HomePage,
  JobPage,
  JobsPage,
  ProgramPage,
  RankingsPage,
  UniversityPage,
  UniversitiesAndProgramsPage,
} from './components/pages/public'
import {
  BecomeAMemberPage,
  EmailVerificationPage,
  ForgotPasswordPage,
  LoginPage,
  ResetPasswordPage,
  SignUpPage,
} from './components/pages/auth'
import {BlogsPage as DashboardBlogsPage, CreateBlogPage} from './components/pages/private/blogs'
import {
  CompaniesPage as DashboardCompaniesPage,
  CompanyPage as DashboardCompanyPage,
} from './components/pages/private/companies'
import {
  UniversityPage as UniversitySignUpPage,
  CompanyPage as CompanySignUpPage,
  ConsultingPage as ConsultingSignUpPage,
} from './components/pages/auth/become-a-member/pages'
import {SkillsTopicPage} from './components/pages/public/skill/topic'
import {SkillPage} from './components/pages/public/skill/skill/skill'
import {SkillsPage} from './components/pages/public/skill/skills'
import {AppliedUserPage, AppliedUsersPage} from './components/pages/private/applied-users'
import {ManagedUserPage, ManagedUsersPage} from './components/pages/private/managed-users'
import {SavedUserPage, SavedUsersPage} from './components/pages/private/saved-users'
import {ConsultingPage, ConsultingsPage} from './components/pages/private/consulting'
import {DashboardPage} from './components/pages/private/dashboard'
import {ProfilePage} from './components/pages/private/profile/profile'
import {
  ProgramsPage as DashboardProgramsPage,
  ProgramPage as DashboardProgramPage,
} from './components/pages/private/programs'
import {SkillsPage as DashboardSkillsPage, SkillPage as DashboardSkillPage} from './components/pages/private/skills'
import {
  UniversitiesPage as DashboardUniversitiesPage,
  UniversityPage as DashboardUniversityPage,
} from './components/pages/private/universities'
import {UsersPage as DashboardUsersPage, UserPage as DashboardUserPage} from './components/pages/private/users'
import {HomeEditPage} from './components/pages/private/home-edit'
import {
  VacanciesPage as DashboardVacanciesPage,
  VacancyPage as DashboardVacancyPage,
} from './components/pages/private/vacancies'
import {ChatPage} from './components/pages/private/chat'
import {Logout} from './components/pages/auth/logout/logout'

export const AppRouter = () => (
  <Routes>
    {/* PUBLIC PAGES */}
    <Route path="/" Component={HomePage} />
    <Route path="/about" Component={AboutPage} />
    <Route path="/contact" Component={ContactPage} />
    <Route path="/rankings" Component={RankingsPage} />
    <Route path="/cv-builder" Component={CVBuilderPage} />
    <Route path="/company/:id" Component={CompanyPage} />
    <Route path="/jobs">
      <Route path="" Component={JobsPage} />
      <Route path=":id" Component={JobPage} />
    </Route>
    <Route path="/universities-programs">
      <Route path="" Component={UniversitiesAndProgramsPage} />
      <Route path=":id" Component={UniversityPage} />
    </Route>
    <Route path="/universities">
      <Route path="" element={<Navigate to="universities-programs?tabs=universities" />} />
      <Route path=":id" Component={UniversityPage} />
    </Route>
    <Route path="/programs">
      <Route path="" element={<Navigate to="universities-programs?tabs=programs" />} />
      <Route path=":id" Component={ProgramPage} />
    </Route>
    <Route path="/blogs">
      <Route path="" Component={BlogsPage} />
      <Route path=":id" Component={BlogPage} />
    </Route>
    <Route path="/skills">
      <Route path="" Component={SkillsPage} />
      <Route path=":id" Component={SkillPage} />
      <Route path="topic">
        <Route path=":id" Component={SkillsTopicPage} />
      </Route>
    </Route>

    {/* AUTH PAGES */}
    <Route path="/auth">
      <Route path="login" Component={LoginPage} />
      <Route path="sign-up" Component={SignUpPage} />
      <Route path="forgot-password" Component={ForgotPasswordPage} />
      <Route path="become-a-member">
        <Route path="" Component={BecomeAMemberPage} />
        <Route path="university" Component={UniversitySignUpPage} />
        <Route path="company" Component={CompanySignUpPage} />
        <Route path="consulting" Component={ConsultingSignUpPage} />
      </Route>
      <Route path="verify" Component={EmailVerificationPage} />
      <Route path="logout" Component={Logout} />
    </Route>
    <Route path="reset-password" Component={ResetPasswordPage} />

    {/* PRIVATE PAGES */}
    <Route path="/dashboard">
      <Route path="" Component={DashboardPage} />
      <Route path="chat" Component={ChatPage} />
      <Route path="home-edit" Component={HomeEditPage} />
      <Route path="blogs">
        <Route path="" Component={DashboardBlogsPage} />
        <Route path="new" Component={CreateBlogPage} />
      </Route>
      <Route path="users">
        <Route path="" Component={DashboardUsersPage} />
        <Route path=":id" Component={DashboardUserPage} />
      </Route>
      <Route path="applied-users">
        <Route path="" Component={AppliedUsersPage} />
        <Route path=":id" Component={AppliedUserPage} />
      </Route>
      <Route path="managed-users">
        <Route path="" Component={ManagedUsersPage} />
        <Route path=":id" Component={ManagedUserPage} />
      </Route>
      <Route path="saved-users">
        <Route path="" Component={SavedUsersPage} />
        <Route path=":id" Component={SavedUserPage} />
      </Route>
      <Route path="universities">
        <Route path="" Component={DashboardUniversitiesPage} />
        <Route path=":id" Component={DashboardUniversityPage} />
      </Route>
      <Route path="consultings">
        <Route path="" Component={ConsultingsPage} />
        <Route path=":id" Component={ConsultingPage} />
      </Route>
      <Route path="vacancies">
        <Route path="" Component={DashboardVacanciesPage} />
        <Route path=":id" Component={DashboardVacancyPage} />
      </Route>
      <Route path="skills">
        <Route path="" Component={DashboardSkillsPage} />
        <Route path=":id" Component={DashboardSkillPage} />
      </Route>
      <Route path="companies">
        <Route path="" Component={DashboardCompaniesPage} />
        <Route path=":id" Component={DashboardCompanyPage} />
      </Route>
      <Route path="programs">
        <Route path="" Component={DashboardProgramsPage} />
        <Route path=":id" Component={DashboardProgramPage} />
      </Route>
      <Route path="profile" Component={ProfilePage} />
    </Route>

    <Route path="*" Component={NotFoundPage} />
  </Routes>
)
