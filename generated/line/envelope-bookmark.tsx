import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEnvelopeBookmark = (
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
    <path d="M21 15.26a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.67l5.88 5.89a3 3 0 0 0 2.1.87 3 3 0 0 0 1.43-.36 1 1 0 0 0 .4-1.36 1 1 0 0 0-1.36-.4 1 1 0 0 1-1.15-.17L5.41 8.26H12a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1m0-12h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1.57.82l1.93-1.29 1.91 1.28a1.06 1.06 0 0 0 .59.19 1 1 0 0 0 .41-.09 1 1 0 0 0 .59-.91v-8a1 1 0 0 0-1-1m-1 7.12-.94-.63a1 1 0 0 0-1.12 0l-.94.63V5.26h3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeBookmark)
export default ForwardRef
