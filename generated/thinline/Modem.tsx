import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgModem = (
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
    <path d="M17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 17 16.5m4.987-3.064a.5.5 0 0 0-.02-.095.5.5 0 0 0-.043-.09.5.5 0 0 0-.05-.073.5.5 0 0 0-.08-.072c-.016-.012-.027-.029-.044-.039l-15.58-9a.5.5 0 1 0-.5.866L19.637 13H3.5a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 5.5 21h14a2.5 2.5 0 0 0 2.5-2.5v-5c0-.023-.01-.043-.013-.064M21 18.5c0 .828-.672 1.5-1.5 1.5h-14c-.828 0-1.5-.672-1.5-1.5V14h17z" />
  </svg>
)
const ForwardRef = forwardRef(SvgModem)
export default ForwardRef
