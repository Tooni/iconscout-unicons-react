import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCube = (
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
    <path d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z" opacity={1} />
    <path d="M12 22.2v-9.9l8.5-5.25v9.9z" opacity={0.25} />
    <path d="m12 22.2-8.5-5.25v-9.9L12 12.3z" opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgCube)
export default ForwardRef
