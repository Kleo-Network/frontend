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
    <div className="w-full">
      <button className="w-full" onClick={toggleAccordion}>
        {header}
      </button>
      <div
        className={`overflow-hidden transition-height duration-200 ease-linear delay-100; ${
          expanded ? 'h-fit' : 'h-0'
        }`}
      >
        {body}
      </div>
    </div>
  )
}
