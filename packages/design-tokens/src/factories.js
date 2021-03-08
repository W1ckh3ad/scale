import color from 'color';

/**
 * @todo a proper type for a "color object"
 * @param {string} specifier - CSS Color Module Level 3 specifier string
 * @returns {Object} "{ model: string, color: number[], valpha: number }"
 */
export function Color(specifier) {
  // No checks needed, already throws if `specifier` is invalid
  return color(specifier).hsl();
}

/**
 * @todo a proper type for a "shadow object"
 * @param {Object} value - "{ x, y blur, spread, color }"
 * @returns {Object} "{ x, y blur, spread, color }"
 */
export function Shadow(value) {
  return {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: Color('rgba(0, 0, 0, 0.1)'),
    ...value,
  };
}
