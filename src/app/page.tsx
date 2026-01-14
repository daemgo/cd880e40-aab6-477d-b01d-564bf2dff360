export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-wide" style={{ fontFamily: 'var(--font-noto-serif), serif' }}>
          欢迎使用 SyncMind
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light" style={{ fontFamily: 'var(--font-noto-serif), serif' }}>
          开始构建你的项目吧
        </p>
      </div>
    </div>
  )
}
