const photos = [
  { src: '/Fave.jpg', caption: 'A personal favorite wildlife moment' },
  { src: '/Sparrow.jpg', caption: 'Sparrow in the brush' },
  { src: '/CheetahYawn.jpg', caption: 'Cheetah mid-yawn' },
  { src: '/sleepyseal.jpg', caption: 'Sleepy seal on the rocks' },
  { src: '/Butterfly.jpg', caption: 'Butterfly close-up' },
]

const Photography = () => {
  return (
    <section id="photography" className="scroll-mt-20 border-y border-edge bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div>
          <h2 className="font-display text-4xl font-medium tracking-tight">Photography</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-2">
            The other half of the birding habit. Shot in the field, mostly while standing
            very still.
          </p>
        </div>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="mb-4 break-inside-avoid">
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
              <figcaption className="mt-2 text-sm text-ink-2">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Photography
