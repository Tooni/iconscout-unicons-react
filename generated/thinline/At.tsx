import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAt = (
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
    <path d="M13.808 2.162a10 10 0 0 0-4.456.208C4.014 3.85.887 9.38 2.37 14.719a9.85 9.85 0 0 0 4.15 5.665 10.2 10.2 0 0 0 5.492 1.613A9.96 9.96 0 0 0 17 20.66a.5.5 0 1 0-.5-.865 9.08 9.08 0 0 1-9.444-.255 8.83 8.83 0 0 1-3.722-5.084A9.032 9.032 0 0 1 13.63 3.146 9.15 9.15 0 0 1 21 12.291v.209a2.5 2.5 0 1 1-5 0v-4a.5.5 0 0 0-1 0v.88A3.97 3.97 0 0 0 12 8a4 4 0 1 0 0 8 3.99 3.99 0 0 0 3.397-1.914A3.49 3.49 0 0 0 18.5 16a3.5 3.5 0 0 0 3.5-3.5v-.209a10.15 10.15 0 0 0-8.192-10.129M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </svg>
)
const ForwardRef = forwardRef(SvgAt)
export default ForwardRef
