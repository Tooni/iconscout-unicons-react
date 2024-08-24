import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.5 11.5a.5.5 0 0 0-.5.5 9.02 9.02 0 1 1-1.502-5H16.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.497A10 10 0 0 0 12.025 2C6.502 1.993 2.02 6.465 2.013 11.987S6.477 21.993 12 22c5.52-.006 9.994-4.48 10-10a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgRedo)
export default ForwardRef
