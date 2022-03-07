import { ImageRef } from './unit.model'

export const getImageFromRef = (ref: ImageRef, size: '2k' | 'preview'): string => {
  return `https://cdn.wec360.com/gen/${ref.ref}@${size}.jpg`
}
