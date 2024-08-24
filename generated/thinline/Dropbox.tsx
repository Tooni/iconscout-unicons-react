import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDropbox = (
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
    <path d="m21.3 12.5-3.6-3.3 3.6-2.9c.1 0 .1-.1.1-.1.1-.2 0-.5-.2-.7l-5-2.7c-.2-.1-.4-.1-.5 0L12 5.6 8.3 2.8c-.2-.1-.4-.1-.5 0l-5 2.7c-.1 0-.1.1-.1.1-.3.1-.2.5 0 .6l3.6 2.9-3.6 3.3-.1.1c-.1.2 0 .5.2.7l3.7 2v2.5c0 .2.1.3.2.4l5 3c.1 0 .2.1.3.1s.2 0 .3-.1l5-3c.2-.1.2-.3.2-.4v-2.5l3.7-2 .1-.1c.3-.1.2-.4 0-.6M16 3.7l4.1 2.2L17 8.6l-4.1-2.4zm.1 5.5L12 11.9 7.9 9.2 12 6.8zM3.9 5.9 8 3.7l3.2 2.4L7 8.6zm0 6.8 3.2-3 4.1 2.7L8 15zm12.6 4.9L12 20.3l-4.5-2.7v-1.7l.3.1H8c.1 0 .2 0 .3-.1L12 13l3.7 2.9c.1.1.2.1.3.1s.2 0 .2-.1l.3-.1zM16 15l-3.2-2.5 4.1-2.7 3.2 3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDropbox)
export default ForwardRef
