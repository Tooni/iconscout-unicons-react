import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgGoogleHangoutsAlt = (
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
    <path
      d="M12 23a1 1 0 0 1-1-1v-1.477a9.842 9.842 0 1 1 10.705-8.527 12.53 12.53 0 0 1-9.466 10.975A1 1 0 0 1 12 23"
      opacity={0.5}
    />
    <path
      d="M9 11.689a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2"
      opacity={1}
    />
    <path
      d="M8.515 14.688a1 1 0 0 1 0-2 .5.5 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.5 2.5 0 0 1-2.5 2.5m6.485-3a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2"
      opacity={1}
    />
    <path
      d="M14.515 14.688a1 1 0 0 1 0-2 .5.5 0 0 0 .5-.5v-2.5a1 1 0 0 1 2 0v2.5a2.5 2.5 0 0 1-2.5 2.5"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGoogleHangoutsAlt)
export default ForwardRef
