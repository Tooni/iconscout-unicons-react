import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPanoramaH = (
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
    <path d="M21.54 5.16a1 1 0 0 0-1-.07A21.3 21.3 0 0 1 12 6.73a21.3 21.3 0 0 1-8.58-1.64 1 1 0 0 0-1 .07A1 1 0 0 0 2 6v12a1 1 0 0 0 .46.84 1 1 0 0 0 1 .07A21.3 21.3 0 0 1 12 17.27a21.3 21.3 0 0 1 8.58 1.64A1.1 1.1 0 0 0 21 19a1 1 0 0 0 .54-.16A1 1 0 0 0 22 18V6a1 1 0 0 0-.46-.84M20 16.52a24.8 24.8 0 0 0-8-1.25 24.8 24.8 0 0 0-8 1.25v-9a24.8 24.8 0 0 0 8 1.25 24.8 24.8 0 0 0 8-1.25Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPanoramaH)
export default ForwardRef
