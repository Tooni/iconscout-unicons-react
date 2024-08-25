import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgProcess = (
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
    <path d="M9 7H5.145a8.5 8.5 0 0 1 8.274-3.387.5.5 0 0 0 .162-.986A10 10 0 0 0 12 2.5a9.52 9.52 0 0 0-7.5 3.677V2.5a.5.5 0 0 0-1 0v5A.5.5 0 0 0 4 8h5a.5.5 0 0 0 0-1m-1.5 7.5a.5.5 0 0 0-.5.5v3.855a8.5 8.5 0 0 1-3.387-8.274.5.5 0 0 0-.986-.162 9.52 9.52 0 0 0 3.55 9.081H2.5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 8 20v-5a.5.5 0 0 0-.5-.5M20 16h-5a.5.5 0 0 0 0 1h3.855a8.5 8.5 0 0 1-8.274 3.387.5.5 0 0 0-.162.986A10 10 0 0 0 12 21.5a9.52 9.52 0 0 0 7.5-3.677V21.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m1.5-12.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V5.14a8.3 8.3 0 0 1 2.358 2.612A8.44 8.44 0 0 1 20.5 12q0 .714-.113 1.419a.499.499 0 1 0 .986.162A10 10 0 0 0 21.5 12a9.44 9.44 0 0 0-1.275-4.747A9.3 9.3 0 0 0 17.828 4.5H21.5a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgProcess)
export default ForwardRef
