import {Navigate, Route, Routes} from 'react-router-dom'
import { HomePage, JobsPage, ApplyJobPage, RecruitersApplyJobPage } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="recruiters-apply-job" element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="apply-job" element={<ApplyJobPage />} />
      <Route path="/" element={<RecruitersApplyJobPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
