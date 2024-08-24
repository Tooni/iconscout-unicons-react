import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSocialDistancing = (
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
    <path d="m21.2 17.3-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3h-2.6c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-.3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2c.1-.1.2-.2.2-.3s.1-.2.1-.4c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3M8.5 17H5.9l.3-.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-.1.1-.2.2-.2.3s-.1.2-.1.4c0 .1 0 .3.1.4s.1.2.2.3l2 2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.3h2.6c.6 0 1-.4 1-1s-.4-1-1-1M18 9.2c1.4 0 2.6-1.2 2.6-2.6S19.4 4 18 4s-2.6 1.2-2.6 2.6 1.2 2.6 2.6 2.6m4.7 3.7c-2.1-2.6-5.9-3-8.5-.9-.3.3-.7.6-.9.9-.4.6-.4 1.4.2 1.8.2.2.5.3.8.3h1.9c.1-.3.3-.5.5-.8 1-1 2.6-1 3.5 0l.8.8h.6c.7 0 1.3-.6 1.3-1.3.1-.3 0-.6-.2-.8m-20.5-1c-.3.3-.7.6-.9.9-.4.6-.4 1.4.2 1.8.2.3.5.4.8.4H3l.8-.8c1-1 2.6-1 3.5 0 .2.2.4.5.5.8h1.9c.7 0 1.3-.6 1.3-1.3 0-.3-.1-.6-.3-.8-2.1-2.6-5.9-3-8.5-1M6 9.2c1.4 0 2.6-1.2 2.6-2.6S7.4 4 6 4 3.4 5.2 3.4 6.6 4.6 9.2 6 9.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSocialDistancing)
export default ForwardRef
