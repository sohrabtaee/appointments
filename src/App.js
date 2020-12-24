import { useState } from 'react'
import dayjs from 'dayjs'

import data from './assets/data.json'
import Company from './components/Company'

function App() {
  const companies = data.map((company) => {
    return {
      id: company.id,
      name: company.name,
      groupedSlots: company.time_slots.reduce((weekDays, slot) => {
        const startTime = dayjs(slot.start_time)
        const day = startTime.format('YYYY-MM-DD')

        if (!weekDays[day]) {
          weekDays[day] = []
        }
        weekDays[day].push(slot)

        return weekDays
      }, {}),
    }
  })

  const [blockedSlots, setBlockedSlots] = useState(
    companies.reduce((acc, company) => {
      acc[company.id] = []
      return acc
    }, {})
  )

  const blockSlots = (companyId, slots) => {
    const blocked = { ...blockedSlots }
    blocked[companyId] = slots
    setBlockedSlots(blocked)
  }

  return (
    <div className="app">
      {companies.map((companyInfo) => (
        <Company
          company={companyInfo}
          key={companyInfo.id}
          onBlockSlots={blockSlots}
          allBlockedSlots={blockedSlots}
        />
      ))}
    </div>
  )
}

export default App
