import Image from 'next/image'
import AuthButton from './AuthButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButton/>
    </main>
  )
}
