import {Image} from '@/components/common'
import {MenuLink} from './components'
import {
  AppliedUsersIcon,
  ChatIcon,
  CollegeIcon,
  CompaniesIcon,
  DashboardHomeIcon,
  DashboardIcon,
  DoubleBookmarkIcon,
  EditHomeIcon,
  InBoxIcon,
  ManagedUsersIcon,
  MenuIcon,
  NotificationIcon,
  ProfileIcon,
  ProgramsIcon,
  SettingIcon,
  ToolsIcon,
  UserAvatar,
  UsersIcon,
  VacanciesIcon,
} from '@/icons'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {useMemo} from 'react'
import {useUserRole} from '@/hooks/use-user-role'
import {Role} from '@/constants/roles'

export const SideBar = ({menu, setMenu}: Props) => {
  const userRole = useUserRole()
  const menuLinks = useMemo(() => {
    const links = [
      {
        label: 'Home',
        icon: <DashboardHomeIcon />,
        path: '/',
      },
      {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/dashboard',
      },
      {
        label: 'Inbox',
        icon: <InBoxIcon />,
        path: '/dashboard/chat',
      },
    ]

    if (!userRole) {
      return []
    }

    if ([Role.SUPER_ADMIN, Role.ADMIN, Role.APPLICANT].includes(userRole)) {
      links.push(
        {
          label: 'Colleges',
          icon: <CollegeIcon />,
          path: '/dashboard/universities',
        },
        {
          label: 'Companies',
          icon: <CompaniesIcon />,
          path: '/dashboard/companies',
        },
      )
    }

    if ([Role.SUPER_ADMIN, Role.ADMIN, Role.APPLICANT, Role.COMPANY].includes(userRole)) {
      links.push({
        label: 'Vacancies',
        icon: <VacanciesIcon />,
        path: '/dashboard/vacancies',
      })
    }

    if ([Role.SUPER_ADMIN, Role.ADMIN].includes(userRole)) {
      links.push(
        {
          label: 'Skills',
          icon: <ToolsIcon />,
          path: '/dashboard/skills',
        },
        {
          label: 'Blog',
          icon: <ChatIcon />,
          path: '/dashboard/blogs',
        },
        {
          label: 'Users',
          icon: <UsersIcon />,
          path: '/dashboard/users',
        },
        {
          label: 'Consulting',
          icon: <ProfileIcon />,
          path: '/dashboard/consultings',
        },
        {
          label: 'Edit homepage',
          icon: <EditHomeIcon className="h-5 w-4" />,
          path: '/dashboard/home-edit',
        },
      )
    }

    if ([Role.COMPANY, Role.UNIVERSITY].includes(userRole)) {
      links.push(
        {
          label: 'Managed users',
          icon: <ManagedUsersIcon />,
          path: '/dashboard/managed-users',
        },
        {
          label: 'Applied users',
          icon: <AppliedUsersIcon />,
          path: '/dashboard/applied-users',
        },
        {
          label: 'Saved users',
          icon: <DoubleBookmarkIcon />,
          path: '/dashboard/saved-users',
        },
      )
    }

    links.push({
      label: 'Profile',
      icon: <UserAvatar className="w-6 h-6" />,
      path: '/dashboard/profile',
    })

    if ([Role.UNIVERSITY].includes(userRole)) {
      links.push({
        label: 'Programs',
        icon: <ProgramsIcon />,
        path: '/dashboard/programs',
      })
    }

    return links
  }, [userRole])

  return (
    <>
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed block md:hidden top-0 left-0 w-full min-h-screen backdrop-blur-sm z-50"
        ></div>
      )}
      <aside
        className={`fixed top-0 z-50 overflow-x-hidden min-h-screen h-screen bg-white w-[250px] lg:left-0 ${
          menu ? 'left-0 lg:w-[67px]' : '-left-[250px]'
        } border-r border-blue-4 duration-300`}
      >
        <div className={`flex flex-col justify-end items-center h-[100px] relative ${menu ? 'px-1' : 'px-5'}`}>
          <Link to="/dashboard" className={menu ? 'mb-5' : 'mb-3'}>
            <Image
              src="/images/logo.svg"
              alt="Student Hunter"
              imageClassName={menu ? 'w-14 h-14 lg:w-9 lg:h-9' : 'w-14 h-14'}
            />
          </Link>
          <span className="w-full border-b"></span>
          <button
            onClick={() => setMenu((prev: boolean) => !prev)}
            className="block lg:hidden absolute right-2 top-1/2 -translate-y-1/2 "
          >
            <MenuIcon className="w-10 h-10" />
          </button>
        </div>
        <div className="pt-14">
          {menuLinks.map((link, index) => (
            <MenuLink key={index} isHiddenLabel={menu} path={link.path} icon={link.icon} label={link.label} />
          ))}
        </div>
        <div className="my-3 px-5">
          <hr />
        </div>
        <MenuLink icon={<SettingIcon />} isHiddenLabel={menu} label="Setttings" />
        <MenuLink icon={<NotificationIcon />} isHiddenLabel={menu} label="Notifications" />
      </aside>
    </>
  )
}
