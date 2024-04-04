import React, {useContext} from 'react'
import { ChannelContext, UserContext } from '../../../App'

function CompD() {
    const userName = useContext(UserContext)
    const channelName = useContext(ChannelContext)

  return (
    <div className='text-gray-950 text-3xl bg-slate-300 w-auto h-auto h-20 p-5'>
        <h1>User Name: {userName}</h1>
        <h1 className='mt-2'>Channel Name: {channelName}</h1>
    </div>
  )
}

export default CompD