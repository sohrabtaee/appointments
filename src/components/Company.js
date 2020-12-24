import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import SelectedSlots from './SelectedSlots'
import TimeSlots from './TimeSlots'

const Company = ({ company, allBlockedSlots, onBlockSlots }) => {
  const [selectedSlots, setSelectedSlots] = useState([])
  const [blockedSlots, setBlockedSlots] = useState([])

  const toggleSlot = (slot) => {
    const index = selectedSlots.indexOf(slot)
    if (index === -1) {
      setSelectedSlots([...selectedSlots, slot])
    } else {
      setSelectedSlots(selectedSlots.filter((item) => item !== slot))
    }
  }

  useEffect(() => {
    if (selectedSlots.length) {
      onBlockSlots(company.id, selectedSlots)
    }
  }, [selectedSlots])

  useEffect(() => {
    const slots = []
    Object.keys(allBlockedSlots).forEach((id) => {
      if (Number(company.id) !== Number(id)) {
        slots.push(allBlockedSlots[id])
      }
    })
    setBlockedSlots(slots.flat())
  }, [allBlockedSlots])

  return (
    <section className="company">
      <h1>{company.name}</h1>
      {selectedSlots.length > 0 && <SelectedSlots slots={selectedSlots} />}
      <h2>Please select a slot</h2>
      <TimeSlots
        slots={company.groupedSlots}
        blockedSlots={blockedSlots}
        selectedSlots={selectedSlots}
        onToggleSlot={toggleSlot}
      />
    </section>
  )
}

Company.propTypes = {
  company: PropTypes.object,
  allBlockedSlots: PropTypes.object,
  onBlockSlots: PropTypes.func,
}

export default Company
