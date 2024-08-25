import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDialpad = (
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
    <path d="M7 2.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4A.76.76 0 0 0 7.75 7V3A.76.76 0 0 0 7 2.25m-.75 4h-2.5v-2.5h2.5Zm14.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5ZM7 9.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4A.76.76 0 0 0 7 9.25m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25 3h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
