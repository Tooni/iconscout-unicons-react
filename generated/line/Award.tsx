import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAward = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="m20.87 17.25-2.71-4.68A6.9 6.9 0 0 0 19 9.25a7 7 0 0 0-14 0 6.9 6.9 0 0 0 .84 3.32l-2.71 4.68a1 1 0 0 0 .87 1.5h2.87l1.46 2.46a1 1 0 0 0 .18.22 1 1 0 0 0 .69.28h.14a1 1 0 0 0 .73-.49L12 17.9l1.93 3.35a1 1 0 0 0 .73.48h.14a1 1 0 0 0 .7-.28.9.9 0 0 0 .17-.21l1.46-2.46H20a1 1 0 0 0 .87-.5 1 1 0 0 0 0-1.03M9.19 18.78l-.89-1.49a1 1 0 0 0-.85-.49H5.72l1.43-2.48a7 7 0 0 0 3.57 1.84ZM12 14.25a5 5 0 1 1 5-5 5 5 0 0 1-5 5m4.55 2.55a1 1 0 0 0-.85.49l-.89 1.49-1.52-2.65a7.06 7.06 0 0 0 3.56-1.84l1.43 2.48Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAward)
export default ForwardRef
