import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToiletPaper = (
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
    <path d="M22.3 20.4c-1.2-1.4-1.8-3.1-1.8-4.9V8c0-3.3-2.2-6-5-6h-9c-2.8 0-5 2.7-5 6s2.2 6 5 6h3v1.5c0 2.3.8 4.5 2.2 6.2.2.2.5.3.8.3h9c.6 0 1-.4 1-1 0-.2-.1-.5-.2-.6M6.5 9.2c-.6 0-1.1-.6-1-1.2-.1-.6.4-1.2 1-1.2.6.1 1.1.6 1 1.2.1.6-.4 1.2-1 1.2M13 20c-1-1.3-1.5-2.9-1.5-4.6V7.9c0-1.4-.4-2.8-1.3-4h5.3c1.7 0 3 1.8 3 4v7.5c0 1.6.4 3.2 1.1 4.6z" />
  </svg>
)
const ForwardRef = forwardRef(SvgToiletPaper)
export default ForwardRef
