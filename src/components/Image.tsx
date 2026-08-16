import { useState } from 'react'
import { Building2 } from 'lucide-react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
}

export default function Image({ wrapperClassName = '', className = '', alt, ...props }: ImageProps) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-graphite to-charcoal text-stone/40 ${wrapperClassName} ${className}`}
        role="img"
        aria-label={alt || 'Image unavailable'}
      >
        <Building2 strokeWidth={1} className="h-10 w-10" />
      </div>
    )
  }

  return (
    <img
      {...props}
      alt={alt}
      loading={props.loading ?? 'lazy'}
      className={className}
      onError={() => setErrored(true)}
    />
  )
}
