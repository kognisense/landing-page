export function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 w-16 rounded-full transition-all duration-300 ${
            i < currentStep
              ? 'bg-olive-700 dark:bg-olive-300'
              : i === currentStep
                ? 'bg-olive-600 dark:bg-olive-400'
                : 'bg-olive-950/10 dark:bg-white/10'
          }`}
        />
      ))}
    </div>
  )
}
