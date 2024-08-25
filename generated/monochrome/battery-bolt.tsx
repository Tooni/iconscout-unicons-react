import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBatteryBolt = (
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
      d="M13.988 12.059A1.023 1.023 0 0 0 13 11H9.732l1.444-2.5a1 1 0 1 0-1.733-1l-2.31 4A1.022 1.022 0 0 0 8 13h3.268l-1.444 2.5a1 1 0 0 0 1.733 1l2.31-4a1.3 1.3 0 0 0 .121-.441"
      opacity={1}
    />
    <path
      d="M17 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6.69a1 1 0 0 1-.866-1.5l1.444-2.5H8a1.022 1.022 0 0 1-.866-1.5l2.31-4a1 1 0 1 1 1.732 1L9.732 11H13a1.023 1.023 0 0 1 .988 1.059 1.3 1.3 0 0 1-.122.441l-2.31 4a1 1 0 0 1-.867.5H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m4 7a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryBolt)
export default ForwardRef
