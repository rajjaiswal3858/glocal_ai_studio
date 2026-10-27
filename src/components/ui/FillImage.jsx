/**
 * Image that fills its positioned parent (replacement for next/image `fill`).
 * Emits the same inline styles next/image produces so layout matches exactly.
 */
export default function FillImage({ src, alt = '', className = '', style, priority = false, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        color: 'transparent',
        ...style,
      }}
      {...rest}
    />
  )
}
