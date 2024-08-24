import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLockAccess = (
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
    <path
      d="M21 10c-.6 0-1-.4-1-1V4h-5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1M3 10c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1H4v5c0 .6-.4 1-1 1m6 12H3c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v5h5c.6 0 1 .4 1 1s-.4 1-1 1m12 0h-6c-.6 0-1-.4-1-1s.4-1 1-1h5v-5c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1"
      className="lock-access_svg__uim-primary"
    />
    <path
      d="M9 10h6c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2m2-1c0-.6.4-1 1-1s1 .4 1 1v1h2V9c0-1.7-1.3-3-3-3S9 7.3 9 9v1h2z"
      className="lock-access_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockAccess)
export default ForwardRef
