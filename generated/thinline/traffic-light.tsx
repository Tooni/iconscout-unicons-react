import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTrafficLight = (
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
    <path d="M12 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2M23 4.5a.5.5 0 0 0-.5-.5h-4.591a2.65 2.65 0 0 0-2.561-2H8.652a2.65 2.65 0 0 0-2.561 2H1.5a.5.5 0 0 0-.5.5c0 1.862.929 3.505 2.345 4.5H1.5a.5.5 0 0 0-.5.5c0 1.862.929 3.505 2.345 4.5H1.5a.5.5 0 0 0-.5.5 5.5 5.5 0 0 0 5.084 5.479A2.65 2.65 0 0 0 8.652 22h6.696a2.65 2.65 0 0 0 2.568-2.021A5.5 5.5 0 0 0 23 14.5a.5.5 0 0 0-.5-.5h-1.845A5.49 5.49 0 0 0 23 9.5a.5.5 0 0 0-.5-.5h-1.845A5.49 5.49 0 0 0 23 4.5M6 18.972A4.5 4.5 0 0 1 2.028 15H6zm0-5A4.5 4.5 0 0 1 2.028 10H6zm0-5A4.5 4.5 0 0 1 2.028 5H6zM17 9.5v9.848A1.654 1.654 0 0 1 15.348 21H8.652A1.654 1.654 0 0 1 7 19.348V4.652A1.654 1.654 0 0 1 8.652 3h6.696c.912.001 1.651.74 1.652 1.652zm4.972 5.5A4.5 4.5 0 0 1 18 18.972V15zm0-5A4.5 4.5 0 0 1 18 13.972V10zM18 8.972V5h3.972A4.5 4.5 0 0 1 18 8.972M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgTrafficLight)
export default ForwardRef
