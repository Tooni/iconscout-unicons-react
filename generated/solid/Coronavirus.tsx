import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCoronavirus = (
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
    <path d="M22 11h-1.1c-.2-1.7-.9-3.3-1.9-4.6l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.8.8c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-1.7.1-3.3.8-4.6 1.9l-.8-.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.8.8C3.9 7.7 3.2 9.3 3.1 11H2c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.2 1.7.9 3.3 1.9 4.6l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c1.3 1.1 2.9 1.7 4.6 1.9V22c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3.3-.9 4.6-1.9l.8.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.8-.8c1.1-1.3 1.7-2.9 1.9-4.6H22c.6 0 1-.4 1-1s-.4-1-1-1M9 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m.5-4c-.8 0-1.5-.7-1.5-1.5S8.7 9 9.5 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5m5 3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5m.5-5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCoronavirus)
export default ForwardRef
