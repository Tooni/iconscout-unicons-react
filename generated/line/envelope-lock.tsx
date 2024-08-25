import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEnvelopeLock = (
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
    <path d="M20.5 7.44V6.26a3 3 0 1 0-6 0v1.18a3 3 0 0 0-2 2.82v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-2-2.82m-4-1.18a1 1 0 1 1 2 0v1h-2Zm4 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm0 5a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V9.67l5.88 5.88a1 1 0 0 0 1.42-1.41L4.91 8.26h5.59a1 1 0 0 0 0-2h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgEnvelopeLock)
export default ForwardRef
