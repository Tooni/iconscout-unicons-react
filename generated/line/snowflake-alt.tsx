import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSnowflakeAlt = (
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
    <path d="M4.93 17.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M19.07 6.34a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0m-12.73 0a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0m11.32 11.32a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M21 11h-1.59l1.3-1.29a1 1 0 0 0-1.42-1.42L16.59 11h-2.18l2.3-2.29a1 1 0 1 0-1.42-1.42L13 9.59V7.41l2.71-2.7a1 1 0 1 0-1.42-1.42L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1 1 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3v2.18l-2.71 2.7a1 1 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13 16.59v-2.18l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L14.41 13h2.18l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L19.41 13H21a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSnowflakeAlt)
export default ForwardRef
