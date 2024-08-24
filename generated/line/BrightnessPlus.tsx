import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBrightnessPlus = (
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
    <path d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m7.71.29L19.36 9V5.64a1 1 0 0 0-1-1h-3.31l-2.34-2.35a1 1 0 0 0-1.42 0L9 4.64H5.64a1 1 0 0 0-1 1V9l-2.35 2.29a1 1 0 0 0 0 1.42l2.35 2.34v3.31a1 1 0 0 0 1 1H9l2.34 2.35a1 1 0 0 0 1.42 0l2.34-2.35h3.31a1 1 0 0 0 1-1v-3.31l2.35-2.34a1 1 0 0 0-.05-1.42m-4.05 2.64a1 1 0 0 0-.3.71v2.72h-2.72a1 1 0 0 0-.71.3L12 19.59l-1.93-1.93a1 1 0 0 0-.71-.3H6.64v-2.72a1 1 0 0 0-.3-.71L4.41 12l1.93-1.93a1 1 0 0 0 .3-.71V6.64h2.72a1 1 0 0 0 .71-.3L12 4.41l1.93 1.93a1 1 0 0 0 .71.3h2.72v2.72a1 1 0 0 0 .3.71L19.59 12Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBrightnessPlus)
export default ForwardRef