import { GridItemInterface } from '@/config/site-config'
import React from 'react'

const SkillsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col h-full w-full m-6">
      <div className="text-lg font-semibold line-clamp-1">{item.title}</div>
      <div className="mt-4">
        {item.skills?.map((skill, index) => (
          <div className="mt-2" key={skill.subtitle}>
            <div className="font-semibold line-clamp-1 mb-2">{skill.subtitle}</div>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, index) => (
                <div key={item} className="text-xs bg-zinc-100 dark:bg-zinc-600 rounded-2xl px-4 py-0.5">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox