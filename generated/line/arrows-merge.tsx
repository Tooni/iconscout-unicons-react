import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowsMerge = (
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
    <path d="m10.71 11.29-2.5-2.5a1 1 0 1 0-1.42 1.42l.8.79H4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33M21 6a1 1 0 0 0-1 1v4h-3.59l.8-.79a1 1 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.8-.79H20v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowsMerge)
export default ForwardRef
