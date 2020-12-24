import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import { formatTimeSlot } from '../hooks/useDateFormatter'

const SelectedSlots = ({ slots }) => {
  const formatDate = (day) => {
    const date = dayjs(day)
    return `${date.format('dddd')} (${date.format('YYYY-MM-DD')})`
  }

  const sortedSlots = [...slots].sort(
    (a, b) => new Date(a.start_time) - new Date(b.start_time)
  )

  return (
    <div className="selected-slots">
      <h3 className="selected-slots__title">Selected Slots</h3>
      <ul className="selected-slots__list">
        {sortedSlots.map((slot) => (
          <li key={slot.start_time} className="selected-slots__slot">
            {formatDate(slot.start_time)}: {formatTimeSlot(slot)}
          </li>
        ))}
      </ul>
    </div>
  )
}

SelectedSlots.propTypes = {
  slots: PropTypes.array,
}

export default SelectedSlots
