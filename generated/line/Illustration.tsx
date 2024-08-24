import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgIllustration = (
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
    <path d="M21.9 9.6c-.2-.5-.8-.7-1.3-.5l-2.9 1.4-2.1-2.1-2.1-2.1 1.4-2.9c.2-.5 0-1.1-.5-1.3s-1.1 0-1.3.5l-1.5 3.1-6.4 1c-.4.1-.7.4-.8.8L2 19.1c-.1.3 0 .7.3.9L4 21.7c.2.2.5.3.7.3h.2l11.6-2.4c.4-.1.7-.4.8-.8l1-6.4 3.1-1.5c.5-.2.7-.8.5-1.3m-6.5 8.2-9.8 2 3.7-3.7c1.5.7 3.3.1 4-1.4s.1-3.3-1.4-4c-1.1-.5-2.5-.3-3.4.6s-1.1 2.3-.6 3.4l-3.7 3.7 2-9.8 5.8-1 2.2 2.2 2.2 2.2zm-5.8-4.4c0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0s.4 1 0 1.4-1 .4-1.4 0c-.2-.2-.3-.5-.3-.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgIllustration)
export default ForwardRef
