import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClockEight = (
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
      d="M12 6a1 1 0 0 0-1 1v4.422l-2.098 1.212a1 1 0 0 0 1 1.732l2.598-1.5A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1"
      opacity={1}
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 10a1 1 0 0 1-.5.866l-2.598 1.5a1 1 0 0 1-1-1.732L11 11.422V7a1 1 0 0 1 2 0Z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockEight)
export default ForwardRef
