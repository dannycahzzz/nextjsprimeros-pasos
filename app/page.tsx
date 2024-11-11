
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center">
      <span className="text-5xl">hola mundo</span>

      <Link href={'./general/about'}>About page</Link>
    </main>
  )
}
