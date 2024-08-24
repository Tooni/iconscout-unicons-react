import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path
      d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0Z"
      className="lock_svg__uim-tertiary"
    />
    <rect
      width={16}
      height={13}
      x={4}
      y={9}
      className="lock_svg__uim-primary"
      rx={3}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLock)
export default ForwardRef
