import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDashboard = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.088 4.955c-.007-.008-.01-.019-.017-.026s-.018-.01-.026-.018a9.98 9.98 0 0 0-14.09 0c-.008.008-.018.01-.026.018s-.01.018-.017.026a10 10 0 1 0 14.176 0M12 20a7.99 7.99 0 0 1-6.235-3H9.78a2.964 2.964 0 0 0 4.44 0h4.015A7.99 7.99 0 0 1 12 20m-1-5a1 1 0 1 1 1 1 1 1 0 0 1-1-1m8.41.002L19.4 15H15a2.995 2.995 0 0 0-2-2.816V9a1 1 0 0 0-2 0v3.184A2.995 2.995 0 0 0 9 15H4.6l-.01.002A8 8 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93a7.95 7.95 0 0 1 1.619-3.898l.654.655a1 1 0 1 0 1.414-1.414l-.654-.655A7.95 7.95 0 0 1 11 4.07V5a1 1 0 0 0 2 0v-.93a7.95 7.95 0 0 1 3.897 1.618l-.654.655a1 1 0 1 0 1.414 1.414l.654-.655A7.95 7.95 0 0 1 19.931 11H19a1 1 0 0 0 0 2h.93a8 8 0 0 1-.52 2.002" />
  </svg>
)
const ForwardRef = forwardRef(SvgDashboard)
export default ForwardRef
