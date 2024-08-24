import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.995 9.933a.5.5 0 0 0-.423-.568l-6.304-.919-2.82-5.73a.52.52 0 0 0-.896 0l-2.82 5.73-6.304.92a.5.5 0 0 0-.278.852l4.563 4.46-1.077 6.3a.5.5 0 0 0 .726.527L12 18.532l5.638 2.973a.5.5 0 0 0 .316.05.5.5 0 0 0 .41-.576l-1.077-6.3 4.563-4.461a.5.5 0 0 0 .145-.285M16.4 14.147a.5.5 0 0 0-.143.442l.95 5.558-4.974-2.623a.5.5 0 0 0-.466 0l-4.974 2.623.95-5.558a.5.5 0 0 0-.143-.442L3.572 10.21l5.565-.81a.5.5 0 0 0 .376-.275L12 4.07l2.487 5.054a.5.5 0 0 0 .376.274l5.565.811z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStar)
export default ForwardRef
