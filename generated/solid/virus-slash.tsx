import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVirusSlash = (
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
    <path d="m19.8 18.4-4-4-2.1-2.1-8-8-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L5 6.4C3.9 7.7 3.2 9.3 3.1 11H2c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.2 1.7.9 3.3 1.9 4.6l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c1.3 1.1 2.9 1.7 4.6 1.9V22c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3.3-.9 4.6-1.9l3.7 3.7c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM9 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m.5-4c-.8 0-1.5-.7-1.5-1.5 0-.3.1-.6.3-.8l2.1 2.1c-.3.1-.6.2-.9.2m11.4 1H22c.6 0 1-.4 1-1s-.4-1-1-1h-1.1c-.2-1.7-.9-3.3-1.9-4.6l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.8.8c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-1 .1-2 .4-2.9.8l12 12c.4-.9.7-1.9.8-2.9M15 10c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgVirusSlash)
export default ForwardRef
