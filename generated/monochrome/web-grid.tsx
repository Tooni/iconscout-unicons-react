import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebGrid = (
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
    <path d="M2 13h12v9h2V2h-2v9H2z" opacity={0.25} />
    <path
      d="M21 22h-5V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M14 22H3a1 1 0 0 1-1-1v-8h12zm0-11H2V3a1 1 0 0 1 1-1h11z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebGrid)
export default ForwardRef
