import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAirplay = (
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
    <path d="M19.5 3h-15A2.5 2.5 0 0 0 2 5.5v10A2.5 2.5 0 0 0 4.5 18h1a.5.5 0 0 0 0-1h-1c-.828 0-1.5-.672-1.5-1.5v-10C3 4.672 3.672 4 4.5 4h15c.828 0 1.5.672 1.5 1.5v10c0 .828-.672 1.5-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 19.5 3m-6.259 11.44a1.557 1.557 0 0 0-2.482-.002l-2.863 4.22A1.5 1.5 0 0 0 9.136 21h5.727a1.5 1.5 0 0 0 1.241-2.342zM14.863 20H9.137a.5.5 0 0 1-.413-.781L11.587 15a.5.5 0 0 1 .413-.219.49.49 0 0 1 .413.22l2.863 4.218a.5.5 0 0 1-.413.781" />
  </svg>
)
const ForwardRef = forwardRef(SvgAirplay)
export default ForwardRef
