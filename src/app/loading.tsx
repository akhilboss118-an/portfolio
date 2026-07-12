export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="flex gap-1">
        {['A', 'D', 'P'].map((letter, i) => (
          <span
            key={letter}
            className="text-4xl font-bold text-foreground animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
