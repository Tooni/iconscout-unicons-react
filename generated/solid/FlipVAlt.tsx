import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipVAlt = (
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
    <path d="M4.9 12.2c-.5-.1-1.1.2-1.2.7l-.5 1.9c-.1.6.2 1.2.8 1.3h.2c.5 0 .9-.3 1-.8l.5-1.9c.1-.5-.2-1-.8-1.2M7.5 5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.5 1 1 1M4.2 19c0-.5-.3-.9-.8-1s-1.1.2-1.2.7l-.2 1v.2c0 .6.4 1 1 1h1c.5 0 .9-.3 1-.8.1-.4-.2-.9-.8-1.1M6.4 6.4c-.5-.1-1.1.2-1.2.7l-.5 2v.2c0 .6.4 1 1 1 .5 0 .9-.3 1-.8l.5-1.9c.1-.5-.3-1-.8-1.2m3.6 6.1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.5-.4-1-1-1m0-6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.5-.4-1-1-1m.5 12.1c-.5-.2-1.1-.1-1.4.4H8c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1v-.5c0-.3-.2-.7-.5-.9M22 19.8l-4-16c-.1-.5-.5-.8-1-.8h-3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h7.2c.6-.2.9-.7.8-1.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipVAlt)
export default ForwardRef
