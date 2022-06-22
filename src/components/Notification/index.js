import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="text-container">
      {children}
      <GrFormClose className="close" />
    </div>
  )
}

export default Notification
