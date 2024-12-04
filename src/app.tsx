/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useMemo, useState} from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {AppRouter} from './router'
import {PrivateRoutes} from './constants/private-routes'
import {PrivateLayout, PublicLayout} from './components/layout'
import {ErrorBoundary} from './components/layout/components'
import {Toaster} from './components/ui/toaster'
import {LayoutExcludedRoutes} from './constants/layout-excluded-routes'
import {useLazyGetUserQuery} from './features/auth'
import {Loader} from './components/common'
import {useHandleRequest} from './hooks/use-handle-request'
import {AuthRoutes} from './constants/auth-routes'
import {GetUserResponse} from './features/auth/types'

export const App = () => {
  const [getUser, {data: user}] = useLazyGetUserQuery()
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const handleRequest = useHandleRequest()
  const isLayoutExlcuded = useMemo(
    () => (Object.values(LayoutExcludedRoutes || {}) as string[]).includes(location.pathname),
    [location],
  )
  const isAuthPage = useMemo(
    () => (Object.values(AuthRoutes || {}) as string[]).includes(location.pathname),
    [location],
  )
  const isPrivatePage = useMemo(
    () => (Object.values(PrivateRoutes || {}) as string[]).some(route => location.pathname.includes(route)),
    [location],
  )

  const fetchUser = async () => {
    await handleRequest({
      request: async () => {
        const result = await getUser('')
        return result
      },
      onSuccess: (data: GetUserResponse) => {
        if (isAuthPage && data.success && data.data) {
          navigate('/dashboard')
        }
      },
    })
    setIsLoading(false)
  }
  useEffect(() => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location, window])

  useEffect(() => {
    if (!user) {
      fetchUser()
    } else {
      setIsLoading(false)
    }
  }, [isAuthPage, isPrivatePage])

  const renderContent = () => (
    <ErrorBoundary>
      <AppRouter />
      <Toaster />
    </ErrorBoundary>
  )

  if (isLoading) {
    return <Loader />
  }

  if (isPrivatePage && !(user?.success || user?.data)) {
    return <Navigate to="/auth/login" />
  }

  if (isLayoutExlcuded) {
    return renderContent()
  }

  if (isPrivatePage) {
    return <PrivateLayout>{renderContent()}</PrivateLayout>
  }

  return <PublicLayout>{renderContent()}</PublicLayout>
}
