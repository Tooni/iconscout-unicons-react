import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMasterCard = (
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
    <path d="M15.25 5.204a6.7 6.7 0 0 0-3.25.843 6.7 6.7 0 0 0-3.25-.843 6.796 6.796 0 0 0 0 13.592 6.7 6.7 0 0 0 3.25-.843 6.7 6.7 0 0 0 3.25.843 6.796 6.796 0 0 0 0-13.592m-6.5 12.592a5.796 5.796 0 0 1 0-11.592c.792 0 1.575.166 2.298.487a6.805 6.805 0 0 0 0 10.618 5.7 5.7 0 0 1-2.298.487m3.25-1.02A5.8 5.8 0 0 1 9.5 12 5.8 5.8 0 0 1 12 7.223a5.813 5.813 0 0 1 0 9.554m3.25 1.02a5.7 5.7 0 0 1-2.298-.487 6.805 6.805 0 0 0 0-10.618 5.7 5.7 0 0 1 2.298-.487 5.796 5.796 0 0 1 0 11.592" />
  </svg>
)
const ForwardRef = forwardRef(SvgMasterCard)
export default ForwardRef
