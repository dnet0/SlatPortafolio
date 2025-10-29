import { cn } from '@/lib/utils'
import type { IconType } from 'react-icons'

export const CustomEmptyIcon: IconType = ({className, style}) => {
  return (
    <div className={cn("w-5 h-5 rounded-md bg-gray-300/50", className)}
      style={{ backgroundColor: style?.color}}>
    </div>
  )
}
