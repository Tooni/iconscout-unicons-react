import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipV = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1m9.7 9.3-5-5c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1v10c0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4M3.8 9.8l-1.1 1.1c-.1.1-.1.2-.2.3-.1 0-.2.1-.3.2-.4.4-.4 1 0 1.4l1.1 1.1c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.5.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0m3.8 5.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.1 1.1c.1.1.4.3.6.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4zm-.3-8.9-.7.7c-.2.1-.3.4-.3.7 0 .6.4 1 1 1 .2 0 .3 0 .5-.1H8c.6 0 1-.4 1-1V7c0-.3-.1-.5-.3-.7-.4-.4-1-.4-1.4 0m.7 4.3c-.6 0-1 .4-1 1v1.5c0 .6.4 1 1 1s1-.4 1-1v-1.5c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipV)
export default ForwardRef
