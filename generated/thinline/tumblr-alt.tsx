import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTumblrAlt = (
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
    <path d="m16.969 20.667-.962-2.853a.5.5 0 0 0-.689-.29c-.45.177-.928.278-1.413.296a1.35 1.35 0 0 1-1.017-.303 1.69 1.69 0 0 1-.395-1.17V11.5h3.517a.5.5 0 0 0 .5-.5V7.096a.5.5 0 0 0-.5-.5H12.51V2a.5.5 0 0 0-.5-.5H9.08a.65.65 0 0 0-.64.595A5.57 5.57 0 0 1 4.83 7.068a.5.5 0 0 0-.33.471v3.583a.5.5 0 0 0 .5.5h1.524v5.035a5.9 5.9 0 0 0 1.739 4.123 6.42 6.42 0 0 0 4.624 1.72l.154-.001c1.572-.027 3.38-.677 3.867-1.39a.5.5 0 0 0 .06-.442m-3.946.832a5.4 5.4 0 0 1-4.06-1.432 4.88 4.88 0 0 1-1.439-3.41v-5.535a.5.5 0 0 0-.499-.5H5.5V7.881A6.57 6.57 0 0 0 9.395 2.5h2.114v4.595a.5.5 0 0 0 .5.5h3.5V10.5h-3.516a.5.5 0 0 0-.5.5v5.356a2.6 2.6 0 0 0 .703 1.883 2.33 2.33 0 0 0 1.737.581 5.6 5.6 0 0 0 1.289-.205l.7 2.08c-.88.513-1.879.79-2.899.804" />
  </svg>
)
const ForwardRef = forwardRef(SvgTumblrAlt)
export default ForwardRef
