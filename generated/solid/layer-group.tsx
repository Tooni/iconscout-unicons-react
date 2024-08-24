import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLayerGroup = (
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
    <path d="m2.5 8.9 9 5.2c.2.1.3.1.5.1s.3 0 .5-.1l9-5.2c.2-.1.3-.2.4-.4.2-.5.1-1.1-.4-1.4l-9-5.2c-.3-.2-.7-.2-1 0l-9 5.2c-.2.1-.3.2-.4.4-.2.5-.1 1.1.4 1.4m19 2.2-.2-.1-8.8 5.1c-.3.2-.7.2-1 0L2.7 11l-.2.1c-.5.3-.6.9-.4 1.4.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4-.1-.2-.2-.3-.4-.4m0 4-.2-.1-8.8 5.1c-.3.2-.7.2-1 0L2.7 15l-.2.1c-.5.3-.6.9-.4 1.4.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4-.1-.2-.2-.3-.4-.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgLayerGroup)
export default ForwardRef
