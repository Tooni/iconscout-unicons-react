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
    <path d="M7.5 16h-4a.5.5 0 0 1-.5-.5v-7c0-.276.224-.5.5-.5h3a.5.5 0 0 0 0-1h-3C2.672 7 2 7.672 2 8.5v7c0 .828.672 1.5 1.5 1.5h4a.5.5 0 0 0 0-1m5.966-4.167q-.016-.042-.04-.079a.5.5 0 0 0-.056-.083c-.022-.025-.048-.043-.074-.063-.019-.014-.032-.034-.053-.046q-.013-.004-.027-.008c-.027-.014-.058-.02-.088-.028-.035-.01-.069-.02-.104-.021-.008 0-.016-.005-.024-.005H8.85l2.088-3.757a.5.5 0 1 0-.876-.486l-2.5 4.5q-.004.013-.008.027c-.014.028-.02.058-.028.09-.01.034-.02.067-.021.101 0 .009-.005.016-.005.025 0 .022.01.04.012.061q.006.053.022.105.016.043.04.081a.5.5 0 0 0 .056.082c.022.025.048.043.074.063.019.015.032.034.053.046.007.003.016.002.023.005A.5.5 0 0 0 8 12.5h4.15l-2.088 3.757a.501.501 0 0 0 .876.486l2.5-4.5q.004-.013.008-.027c.014-.027.02-.058.028-.088.01-.035.02-.069.021-.104 0-.008.005-.016.005-.024 0-.021-.01-.039-.012-.06a.5.5 0 0 0-.022-.107M17.5 7h-4a.5.5 0 0 0 0 1h4c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5h-3a.5.5 0 0 0 0 1h3c.828 0 1.5-.672 1.5-1.5v-7c0-.828-.672-1.5-1.5-1.5m4 3a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgBatteryBolt)
export default ForwardRef
