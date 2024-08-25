import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDownloadAlt = (
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
    <path d="M8.162 13.655a.5.5 0 0 0-.007.707l3.491 3.492a.5.5 0 0 0 .708 0l3.49-3.492a.5.5 0 0 0-.706-.707L12.5 16.293V2.5a.5.5 0 0 0-1 0v13.793l-2.638-2.638a.5.5 0 0 0-.7 0M18 9h-1.5a.5.5 0 0 0 0 1H18a2.003 2.003 0 0 1 2 2v7a2.003 2.003 0 0 1-2 2H6a2.003 2.003 0 0 1-2-2v-7a2.003 2.003 0 0 1 2-2h2.5a.5.5 0 0 0 0-1H6a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3" />
  </svg>
)
const ForwardRef = forwardRef(SvgDownloadAlt)
export default ForwardRef
