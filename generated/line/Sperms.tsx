import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSperms = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M11.06 20.1a2 2 0 0 1-.65-.48 2.47 2.47 0 0 1-.67-1.14 4.2 4.2 0 0 0-1.31-2.06 3.57 3.57 0 0 0-1-3.28 3.28 3.28 0 0 0-4.59-.35 3.29 3.29 0 0 0 .35 4.6 3.87 3.87 0 0 0 2.21 1.12h.36a2.85 2.85 0 0 0 1.53-.44 2.05 2.05 0 0 1 .51.93A4.46 4.46 0 0 0 9 21a4.3 4.3 0 0 0 1.2.88 1 1 0 0 0 .44.1 1 1 0 0 0 .44-1.9Zm-4.74-3.77a.86.86 0 0 1-.7.19A1.8 1.8 0 0 1 4.56 16c-.57-.56-.73-1.39-.36-1.77a.82.82 0 0 1 .56-.2 1.8 1.8 0 0 1 1.24.53 1.8 1.8 0 0 1 .55 1.06.86.86 0 0 1-.23.71m15-6.12a2.2 2.2 0 0 1-.91-.59 2.47 2.47 0 0 1-.67-1.14 4.2 4.2 0 0 0-1.31-2.06 3.57 3.57 0 0 0-1.05-3.28 3.28 3.28 0 0 0-4.59-.35 3.29 3.29 0 0 0 .35 4.6 3.87 3.87 0 0 0 2.26 1.12h.36a2.85 2.85 0 0 0 1.53-.44 2.05 2.05 0 0 1 .51.93 4.54 4.54 0 0 0 1.2 2 4.36 4.36 0 0 0 1.7 1.08 1.3 1.3 0 0 0 .32.05 1 1 0 0 0 .95-.68 1 1 0 0 0-.65-1.24m-5-3.88a.86.86 0 0 1-.7.19A1.8 1.8 0 0 1 14.56 6c-.57-.56-.73-1.39-.36-1.77a.82.82 0 0 1 .56-.2 1.8 1.8 0 0 1 1.24.53 1.8 1.8 0 0 1 .55 1.06.86.86 0 0 1-.23.71m5.39 14.12a4.45 4.45 0 0 0-3.23-3.23 3.2 3.2 0 0 1-1.39-.82 2.93 2.93 0 0 1-.8-1.38A4.65 4.65 0 0 0 13 11.77a2.9 2.9 0 0 1-1.38-.8 3 3 0 0 1-.81-1.39 4.7 4.7 0 0 0-1-1.86 3.9 3.9 0 0 0 .19-1.5 4.75 4.75 0 0 0-1.4-2.8A4.78 4.78 0 0 0 5.78 2 3.43 3.43 0 0 0 3 3a3.43 3.43 0 0 0-1 2.78 4.75 4.75 0 0 0 1.4 2.8A4.78 4.78 0 0 0 6.22 10h.43a3.4 3.4 0 0 0 2-.6 2.6 2.6 0 0 1 .31.71 5.12 5.12 0 0 0 3.6 3.59 2.61 2.61 0 0 1 1.83 1.84 5.11 5.11 0 0 0 3.6 3.6 2.57 2.57 0 0 1 1.8 1.86 3 3 0 0 0 .16.46 1 1 0 0 0 .88.54 1.2 1.2 0 0 0 .44-.1 1 1 0 0 0 .48-1.33s-.03-.1-.04-.12M7.64 7.64c-.64.63-1.92.41-2.81-.47A2.78 2.78 0 0 1 4 5.56a1.47 1.47 0 0 1 .35-1.2 1.4 1.4 0 0 1 1-.36 2.7 2.7 0 0 1 1.83.83A2.78 2.78 0 0 1 8 6.44a1.47 1.47 0 0 1-.36 1.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSperms)
export default ForwardRef
