import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBatteryBolt = (
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
    <path d="M17 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6.7c-.6 0-1-.4-1-1 0-.2 0-.3.1-.5l1.4-2.5H8c-.1 0-.2 0-.3-.1h-.2l-.1-.1c-.1 0-.1-.1-.2-.1-.1-.1-.1-.2-.2-.3V12c0-.1.1-.3.1-.4v-.1l2.3-4c.3-.5.9-.6 1.4-.4.5.3.6.9.4 1.4L9.7 11h3.4c.1 0 .3.1.4.1h.1l.1.1c.1 0 .1.1.2.1.1.1.1.2.2.3v.4c0 .1-.1.3-.1.4v.1l-2.3 4c-.3.3-.7.5-1 .5H17c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m4 3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryBolt)
export default ForwardRef
