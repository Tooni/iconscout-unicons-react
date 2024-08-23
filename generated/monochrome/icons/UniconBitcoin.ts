import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBitcoin = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M16.358 10.575c.197-1.33-.805-2.046-2.175-2.523l.445-1.802-1.085-.274-.433 1.755c-.285-.072-.578-.14-.869-.207l.436-1.766-1.085-.274-.444 1.802a36.28 36.28 0 0 1-.693-.164l.001-.006-1.496-.378-.288 1.172s.804.187.788.198c.313.04.537.324.505.638l-1.217 4.938a.394.394 0 0 1-.498.26c.011.017-.788-.198-.788-.198l-.539 1.256 1.412.356c.263.066.52.136.773.201l-.449 1.824 1.084.273.445-1.804c.296.082.583.157.864.227l-.443 1.795 1.085.274.449-1.82c1.85.354 3.241.211 3.827-1.48a1.933 1.933 0 0 0-.997-2.662 1.743 1.743 0 0 0 1.385-1.61zm-2.479 3.516c-.335 1.362-2.603.626-3.339.44l.596-2.414c.735.185 3.094.553 2.743 1.974zm.336-3.535c-.306 1.239-2.194.61-2.806.455l.54-2.19c.612.154 2.584.442 2.266 1.735z' }),createElement('path', { d: 'm11.949 8.82-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736zM11.136 12.117l-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974z' }),createElement('path', { d: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.358 8.575a1.743 1.743 0 0 1-1.385 1.611 1.933 1.933 0 0 1 .997 2.66c-.586 1.693-1.977 1.836-3.827 1.482l-.449 1.82-1.085-.274.443-1.795c-.28-.07-.568-.145-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199l.005.001a.394.394 0 0 0 .493-.262l1.217-4.938a.583.583 0 0 0-.505-.638c.016-.011-.788-.198-.788-.198l.288-1.172 1.496.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523z' }));
