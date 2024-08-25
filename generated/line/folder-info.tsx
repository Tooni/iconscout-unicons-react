import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFolderInfo = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M12 13.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m7-8h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Zm-7.29-7.71a1 1 0 0 0-1.09-.21.9.9 0 0 0-.33.21 1.05 1.05 0 0 0-.29.71 1 1 0 0 0 .29.7 1 1 0 0 0 1.42 0 1 1 0 0 0 .29-.7 1 1 0 0 0-.08-.38.9.9 0 0 0-.21-.33" />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderInfo)
export default ForwardRef
