import dayjs from 'dayjs'

export const formatTimeSlot = (slot) => {
  if (!slot) return ''
  const startTime = dayjs(slot.start_time)
  const endTime = dayjs(slot.end_time)
  return `${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`
}
