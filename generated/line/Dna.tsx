import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDna = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M9.2 13.73a1 1 0 0 0-1.41-.05A11.18 11.18 0 0 0 4 22a1 1 0 0 0 2 0 9.15 9.15 0 0 1 3.15-6.86 1 1 0 0 0 .05-1.41m10.17 4.64a10.9 10.9 0 0 0-1.6-3A14.3 14.3 0 0 0 14.06 12C16.3 10.57 20 7.4 20 2a1 1 0 0 0-2 0c0 5.4-4.59 8.17-6 8.89A13.4 13.4 0 0 1 9.31 9H12a1 1 0 0 0 0-2H7.55a9.4 9.4 0 0 1-1-2H15a1 1 0 0 0 0-2H6.06A8 8 0 0 1 6 2a1 1 0 0 0-2 0c0 7.57 7.3 10.79 7.61 10.92A13 13 0 0 1 14.7 15H12a1 1 0 0 0 0 2h4.43a9 9 0 0 1 1 2H9a1 1 0 0 0 0 2h8.94a8 8 0 0 1 .06 1 1 1 0 0 0 2 0 10.5 10.5 0 0 0-.22-2.19 9 9 0 0 0-.41-1.44" />
  </svg>
)
const ForwardRef = forwardRef(SvgDna)
export default ForwardRef
