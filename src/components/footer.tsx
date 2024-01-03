import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500 ml-3">
          <span>Built by </span>
          <a href="https://github.com/yingsunnn">@yingsunnn</a>
          <span> | </span>
          <a href="https://github.com/yingsunnn/ying-portfolio">Source Code</a>
        </div>
        
      </div>
    </div>
  )
}

export default Footer