import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgProgrammingLanguage = (
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
    <path d="m22 3-3 15.1-9.1 3-7.9-3 .8-4.1h3.4l-.4 1.7 4.8 1.8 5.5-1.8.8-3.8H3.2l.7-3.4h13.6l.5-2.1H4.3L5 3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgProgrammingLanguage)
export default ForwardRef
