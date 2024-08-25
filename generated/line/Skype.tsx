import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSkype = (
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
    <path d="M21.435 14.156a9.6 9.6 0 0 0 .211-2.027 9.477 9.477 0 0 0-9.54-9.422 9 9 0 0 0-1.625.141A5.536 5.536 0 0 0 2 7.466a5.43 5.43 0 0 0 .753 2.756 10 10 0 0 0-.189 1.884 9.34 9.34 0 0 0 9.54 9.258 8.6 8.6 0 0 0 1.743-.166 5.6 5.6 0 0 0 2.616.802 5.433 5.433 0 0 0 4.97-7.844m-4.995 1.837a3.63 3.63 0 0 1-1.625 1.225 6.3 6.3 0 0 1-2.52.447 6.2 6.2 0 0 1-2.898-.612 3.7 3.7 0 0 1-1.32-1.178 2.57 2.57 0 0 1-.494-1.413.88.88 0 0 1 .307-.684 1.1 1.1 0 0 1 .776-.282.94.94 0 0 1 .637.212 1.8 1.8 0 0 1 .447.659 3.4 3.4 0 0 0 .495.873 1.8 1.8 0 0 0 .73.564 3 3 0 0 0 1.249.236 2.92 2.92 0 0 0 1.72-.447 1.33 1.33 0 0 0 .66-1.131 1.14 1.14 0 0 0-.354-.871 2.2 2.2 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a14 14 0 0 1-2.144-.636 3.35 3.35 0 0 1-1.366-1.013 2.47 2.47 0 0 1-.495-1.578 2.63 2.63 0 0 1 .542-1.602 3.4 3.4 0 0 1 1.53-1.084 6.7 6.7 0 0 1 2.38-.376 6.4 6.4 0 0 1 1.885.258 4.1 4.1 0 0 1 1.318.66 2.9 2.9 0 0 1 .778.872 1.8 1.8 0 0 1 .236.87.96.96 0 0 1-.307.708 1 1 0 0 1-.753.306.97.97 0 0 1-.636-.189 2.4 2.4 0 0 1-.471-.611 2.9 2.9 0 0 0-.778-.967 2.38 2.38 0 0 0-1.46-.353 2.7 2.7 0 0 0-1.508.377 1.08 1.08 0 0 0-.565.896.96.96 0 0 0 .188.565 1.4 1.4 0 0 0 .542.4 2.7 2.7 0 0 0 .683.26c.236.07.613.164 1.154.282.66.142 1.273.306 1.815.471a5.4 5.4 0 0 1 1.389.636 2.86 2.86 0 0 1 .895.942 2.8 2.8 0 0 1 .33 1.39 2.9 2.9 0 0 1-.542 1.814" />
  </svg>
)
const ForwardRef = forwardRef(SvgSkype)
export default ForwardRef
