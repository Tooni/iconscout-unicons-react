import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipHAlt = (
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
    <path d="M3.5 8.321a.5.5 0 0 0 .5-.5v-.366l.354-.095a.5.5 0 0 0-.26-.966l-.724.194A.5.5 0 0 0 3 7.07v.75a.5.5 0 0 0 .5.5M9.934 10h-1.55a.5.5 0 0 0 0 1h1.55a.5.5 0 0 0 0-1M8.372 6.262a.5.5 0 0 0 .13-.018l1.555-.418h.003a.5.5 0 1 0-.263-.965l-1.555.418a.5.5 0 0 0 .13.983M14.067 11h1.55a.5.5 0 0 0 0-1h-1.55a.5.5 0 0 0 0 1m.007-6.272a.5.5 0 0 0 .13-.018l1.555-.418h.002a.5.5 0 0 0-.262-.965l-1.555.418a.5.5 0 0 0 .13.983M20.5 13h-17a.5.5 0 0 0-.5.5v3.75a.5.5 0 0 0 .379.485l17 4.25q.06.015.121.015h.001a.5.5 0 0 0 .499-.5v-8a.5.5 0 0 0-.5-.5m-.5 7.86-16-4V14h16zm.983-18.489a.5.5 0 0 0-.613-.354l-.724.194h-.002a.5.5 0 1 0 .261.967L20 3.15v.099a.5.5 0 0 0 1 0V2.5a.5.5 0 0 0-.017-.129M20.5 5.487a.5.5 0 0 0-.5.5v1.027a.5.5 0 1 0 1 0V5.987a.5.5 0 0 0-.5-.5m0 3.763a.5.5 0 0 0-.5.5V10h-.25a.5.5 0 0 0 0 1h.75a.5.5 0 0 0 .5-.5v-.75a.5.5 0 0 0-.5-.5M3.5 11h.75a.5.5 0 0 0 0-1H4v-.25a.5.5 0 0 0-1 0v.75a.5.5 0 0 0 .5.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipHAlt)
export default ForwardRef
