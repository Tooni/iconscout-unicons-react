import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPolygon = (
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
    <path d="m21.9 11.5-4.5-7.8c-.2-.3-.5-.5-.9-.5h-9c-.4 0-.7.2-.9.5l-4.5 7.8c-.2.3-.2.7 0 1l4.5 7.8c.2.3.5.5.9.5h9c.4 0 .7-.2.9-.5l4.5-7.8c.1-.3.1-.7 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgPolygon)
export default ForwardRef
