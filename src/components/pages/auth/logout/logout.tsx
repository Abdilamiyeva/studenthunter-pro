/* eslint-disable react-hooks/exhaustive-deps */
import {Loader} from '@/components/common'
import {RTKTagNames} from '@/constants/rtk-tag-names'
import {baseApi} from '@/features'
import {useStorage} from '@/utils/storage'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    useStorage.removeCredentials()
    dispatch(baseApi.util.invalidateTags([RTKTagNames.USER]))
    navigate('/auth/login')
  }, [])

  return <Loader />
}
