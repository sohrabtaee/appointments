import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import { formatTimeSlot } from '../hooks/useDateFormatter'

const TimeSlots = ({ slots, blockedSlots, selectedSlots, onToggleSlot }) => {
  const isBlocked = (slot) => {
    return blockedSlots.some((blockedSlot) => {
      return (
        slot.start_time === blockedSlot.start_time &&
        slot.end_time === blockedSlot.end_time
      )
    })
  }

  const isSelected = (slot) => selectedSlots.indexOf(slot) !== -1

  return (
    <ul className="time-slots">
      {Object.keys(slots).map((date) => (
        <li key={date} className="time-slots__weekday">
          {dayjs(date).format('dddd')} ({date})
          <ul className="time-slots__slots">
            {slots[date].map((slot) => (
              <li key={slot.start_time}>
                <button
                  onClick={() => onToggleSlot(slot)}
                  disabled={isBlocked(slot)}
                  className={
                    isSelected(slot)
                      ? 'time-slots__slot selected'
                      : 'time-slots__slot'
                  }
                >
                  {formatTimeSlot(slot)}
                </button>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

TimeSlots.propTypes = {
  slots: PropTypes.object,
  blockedSlot: PropTypes.array,
  selectedSlots: PropTypes.array,
  onToggleSlot: PropTypes.func,
}

export default TimeSlots
