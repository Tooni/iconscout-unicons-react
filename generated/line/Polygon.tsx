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
    <path d="m21.87 11.5-4.5-7.79a1 1 0 0 0-.87-.5h-9a1 1 0 0 0-.87.5l-4.5 7.79a1 1 0 0 0 0 1l4.5 7.79a1 1 0 0 0 .87.5h9a1 1 0 0 0 .87-.5l4.5-7.79a1 1 0 0 0 0-1m-6 7.29H8.08L4.15 12l3.93-6.79h7.84L19.85 12Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPolygon)
export default ForwardRef
