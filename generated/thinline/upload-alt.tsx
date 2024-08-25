import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUploadAlt = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M18 9h-1.5a.5.5 0 0 0 0 1H18a2.003 2.003 0 0 1 2 2v7a2.003 2.003 0 0 1-2 2H6a2.003 2.003 0 0 1-2-2v-7a2.003 2.003 0 0 1 2-2h2.5a.5.5 0 0 0 0-1H6a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3M8.862 6.345 11.5 3.707v13.794a.5.5 0 1 0 1 0V3.706l2.638 2.638a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707l-3.491-3.491a.5.5 0 0 0-.344-.145L12 2l-.007.001a.5.5 0 0 0-.347.146l-3.49 3.49-.008.008a.5.5 0 1 0 .714.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgUploadAlt)
export default ForwardRef
