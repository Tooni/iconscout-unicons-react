import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgExchangeAlt = (
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
    <path d="m21.71 9.29-4-4a1 1 0 0 0-1.42 1.42L18.59 9H7a1 1 0 0 0 0 2h14a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09M17 13H3a1 1 0 0 0-.92.62 1 1 0 0 0 .21 1.09l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 15H17a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgExchangeAlt)
export default ForwardRef
