import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyholeCircle = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1.7 9c-.2.3-.4.6-.7.7V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.3c-1-.6-1.3-1.8-.7-2.7S12 7.7 13 8.3c1 .5 1.3 1.7.7 2.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyholeCircle)
export default ForwardRef
