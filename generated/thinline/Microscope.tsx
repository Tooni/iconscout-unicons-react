import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMicroscope = (
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
    <path d="M20.5 22H14c.3-.4.5-.9.5-1.5v-.1c1.2-.5 2.4-1.2 3.3-2.2 3-3.3 2.9-8.4-.2-11.6l.5-.5c.1-.1.2-.1.2-.2l.7-2.1c.1-.2 0-.4-.1-.5l-2.1-2.1c-.2-.2-.4-.2-.6-.2l-2.1.7c-.1 0-.1.1-.2.1L7.6 8.2c-.2.2-.2.5 0 .7l.4.4L6.1 11c-.2.2-.2.5 0 .7l2.1 2.1c.2.2.3.2.4.2s.3 0 .4-.1l1.8-1.8.4.4c.1.1.2.1.4.1.1 0 .3-.1.4-.1l5.1-5.1c.8.8 1.4 1.8 1.7 2.9 1.2 3.8-.7 7.8-4.4 9.2-.5-.9-1.4-1.5-2.4-1.5-1.1 0-2.1.7-2.4 1.8-1.2-.3-2.3-.9-3.2-1.8h1.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5s.2.5.5.5H5c1.2 1.4 2.7 2.3 4.5 2.8 0 .5.2.9.5 1.2H3.5c-.3 0-.5.2-.5.5s.2.5.5.5h17c.3 0 .5-.2.5-.5s-.2-.5-.5-.5M8.6 12.8l-1.4-1.4L8.6 10l1.4 1.4zm8-6.5s-.1 0 0 0q-.15 0 0 0l-5.1 5.1-2.9-2.8 5.9-5.9 1.7-.6 1.7 1.7-.6 1.7zM12 22c-.8 0-1.5-.7-1.5-1.5S11.2 19 12 19s1.5.7 1.5 1.5S12.8 22 12 22" />
  </svg>
)
const ForwardRef = forwardRef(SvgMicroscope)
export default ForwardRef
