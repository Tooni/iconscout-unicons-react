import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPentagon = (
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
    <path d="m21.6 9.2-9-6.5q-.6-.45-1.2 0l-9 6.5c-.3.2-.5.7-.4 1.1l3.4 10.6c.1.4.5.7 1 .7h11.1c.4 0 .8-.3 1-.7L22 10.3c.1-.4-.1-.9-.4-1.1" />
  </svg>
)
const ForwardRef = forwardRef(SvgPentagon)
export default ForwardRef
