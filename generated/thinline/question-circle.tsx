import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgQuestionCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12.596 8.105A2.5 2.5 0 0 0 9.55 9.897a.5.5 0 1 0 .969.25 1.5 1.5 0 1 1 1.926 1.796 1.51 1.51 0 0 0-.981 1.452v.628a.5.5 0 1 0 1 0v-.628a.52.52 0 0 1 .304-.504 2.498 2.498 0 0 0-.173-4.786m-.631 7.292a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18 9.01 9.01 0 0 1 9 9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgQuestionCircle)
export default ForwardRef
