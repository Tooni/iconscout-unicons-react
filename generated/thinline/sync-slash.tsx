import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSyncSlash = (
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
    <path d="M21.853 2.159a.5.5 0 0 0-.707-.013L18.694 4.6A10 10 0 0 0 16.752 3.2C12.332.817 6.925 2.105 4 6.004V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H4.53c.322-.48.673-.94 1.083-1.351 3.398-3.407 8.837-3.518 12.381-.35L5.297 17.996A8.93 8.93 0 0 1 3 12q0-.714.113-1.419a.5.5 0 0 0-.986-.162 9.98 9.98 0 0 0 2.467 8.28l-2.448 2.447a.5.5 0 1 0 .707.707l19-19a.5.5 0 0 0 0-.694M20.5 16h-4a.5.5 0 0 0 0 1h2.987c-2.587 3.867-7.75 5.164-11.882 2.854a.5.5 0 0 0-.49.872A10 10 0 0 0 12 22a10 10 0 0 0 8-3.999V20.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5m.226-8.885a.5.5 0 0 0-.872.49 9 9 0 0 1 1.032 5.816.499.499 0 1 0 .987.16 9.99 9.99 0 0 0-1.147-6.466" />
  </svg>
)
const ForwardRef = forwardRef(SvgSyncSlash)
export default ForwardRef
