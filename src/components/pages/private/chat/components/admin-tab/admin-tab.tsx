import {AdminChat} from '../base-ui/admin-chat'

export const AdminTab = () => (
  <div className="flex flex-col flex-1  overflow-auto h-[calc(100vh-230px)]">
    <div className="border border-blue-4 rounded-t-2xl h-full overflow-hidden bg-white flex ">
      <AdminChat />
    </div>
  </div>
)
