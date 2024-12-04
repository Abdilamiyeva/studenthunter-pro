import {ApplicantCertificate} from '@/types/applicant'

export const getCertificateScore = (certs: ApplicantCertificate[], certName: string) =>
  certs?.find(cert => cert.certificate_name.toLowerCase().trim() === certName.toLowerCase().trim())
    ?.certificate_score || 'N/A'
