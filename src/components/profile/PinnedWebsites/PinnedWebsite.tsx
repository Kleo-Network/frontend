import React from 'react'
import { ReactComponent as DragIcon } from '../../../assets/images/drag.svg'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface PinnedWebsitesProps {
  isSelected: boolean
  onClick: () => void
  website: {
    icon: string
    title: string
    domain: string
    id: string
    order: string
  }
}

export default function PinnedWebsites({
  isSelected,
  onClick,
  website: { icon, title: name, domain: url }
}: React.PropsWithChildren<PinnedWebsitesProps>) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: name })

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition
      }}
      className={`group basis-1/3 flex flex-1  items-center p-4 gap-4 rounded-xl bg-white border border-gray-200 max-w-[272px] ${
        isSelected ? 'border-purple-700 shadow-md' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row flex-none items-center justify-center w-8 h-8 rounded-full">
        <img src={icon} className="w-8 h-8" />
      </div>
      <div className="text-left w-full">
        <h4 className="text-sm font-medium text-gray-800">{name}</h4>
        <a
          className="text-xs font-regular text-gray-500 flex max-w-[150px] overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-purple-700 hover:underline"
          title={url}
          href={url}
          target="_blank"
        >
          {url}
        </a>
      </div>

      <div
        {...listeners}
        {...attributes}
        className="hover:cursor-grab active:cursor-grabbing px-1 py-2 rounded invisible group-hover:visible"
      >
        <DragIcon className="w-4 h-4 fill-gray-300" />
      </div>
    </button>
  )
}
