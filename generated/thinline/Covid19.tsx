import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCovid19 = (
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
    <path d="M8.7 4.7c.9-.4 1.8-.6 2.8-.7v2.5c0 .3.2.5.5.5s.5-.2.5-.5V4c1.8.1 3.5.8 4.8 2l-.3.3c-.1.1-.1.2-.1.4 0 .3.2.5.5.5.1 0 .3-.1.4-.1l.2-.4c1.1 1.3 1.9 3 2 4.8h-2.5c-.3 0-.5.2-.5.5s.2.5.5.5H20c-.1 1-.3 1.9-.7 2.8-.1.3 0 .5.2.7h.2c.2 0 .4-.1.5-.3.5-1 .7-2.1.8-3.2h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H21c-.1-2.1-1-4-2.3-5.5l1-1c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-1 1C16.5 4 14.6 3.1 12.5 3V1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V3c-1.1.1-2.2.3-3.2.8-.3.1-.4.4-.3.7.2.2.5.3.7.2m.3 8.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5m0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5M1.9 1.1c-.2-.1-.6-.1-.7 0-.2.2-.2.6-.1.8L5.3 6C3.9 7.5 3.1 9.5 3 11.5H1.5c-.3 0-.5.2-.5.5s.2.5.5.5H3c.1 2.1 1 4 2.3 5.5l-1 1c-.1.1-.1.2-.1.4 0 .3.2.5.5.5.1 0 .3-.1.4-.1l1-1c1.5 1.3 3.4 2.2 5.5 2.3v1.5c0 .3.2.5.5.5s.5-.2.5-.5V21c2-.1 4-.9 5.5-2.3l4.2 4.2c.1.1.2.1.4.1.1 0 .3-.1.4-.1.2-.2.2-.5 0-.7zM9 9.7l1.4 1.4c-.2.3-.5.5-.8.5-.6 0-1-.4-1-1-.1-.4.1-.8.4-.9M12.5 20v-3.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V20c-1.7-.1-3.4-.8-4.8-2l.3-.3c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-.3.3c-1.2-1.4-1.9-3.1-2-4.8h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H4c.1-1.7.8-3.4 2-4.8L8.3 9c-.5.4-.8.9-.8 1.5 0 1.1.9 2 2 2 .6 0 1.2-.3 1.5-.8l6.2 6.2c-1.3 1.3-3 2-4.7 2.1m1-11c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5m2 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgCovid19)
export default ForwardRef
