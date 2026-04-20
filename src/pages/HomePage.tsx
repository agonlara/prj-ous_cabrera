import useAppStore from '../store/useAppStore'

export default function HomePage() {
  const appName = useAppStore((s) => s.appName)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hello World
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{appName}</p>
    </main>
  )
}
