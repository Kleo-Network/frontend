import React from 'react'

interface AccordionProps {
  header: React.ReactNode
  body: React.ReactNode
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Accordion({
  header,
  body,
  expanded,
  setExpanded
}: AccordionProps) {
  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <button className="w-full" onClick={toggleAccordion}>
        {header}
      </button>
      {expanded && <div>{body}</div>}
    </div>
  )
}
