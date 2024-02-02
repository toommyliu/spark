/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HYkoB6FoooL
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Champion() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">League of Legends Wiki</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Champions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Items
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Runes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Maps
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Ahri, the Nine-Tailed Fox
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by
                  manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri
                  retains a sense of empathy as she receives flashes of memory from each soul she consumes.
                </p>
              </div>
            </div>
            <img
              alt="Ahri"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Abilities</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ahri's Abilities</h2>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Essence Theft (Passive)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ahri gains a brief burst of movement speed and recovers health whenever she lands a spell that hits a
                  champion.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Orb of Deception (Q)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way
                  back.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Fox-Fire (W)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ahri releases three fox-fires, that lock onto and attack nearby enemies.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Charm (E)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement
                  abilities and causing them to walk harmlessly towards her. The target temporarily takes increased
                  damage from Ahri.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Spirit Rush (R)</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ahri dashes forward and fires essence bolts, damaging 3 nearby enemies (prioritizes Champions). Spirit
                  Rush can be cast up to three times before going on cooldown.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tips and Tricks</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Playing as Ahri
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ahri's survivability is dramatically increased when her passive is available. Try to time the passive to
                be ready when you're about to go for a kill.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Initiate team fights using Charm, and chase down stragglers with Spirit Rush.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You can use Flash while your orb is travelling to make it change direction.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Recommended Items</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                These items are great choices for Ahri to enhance her abilities and performance in battle.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Luden's Echo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This item provides Ahri with additional ability power, mana, and cooldown reduction. The unique
                    passive helps increase Ahri's burst damage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rabadon's Deathcap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A must-have for any AP champion. It significantly increases Ahri's ability power.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Morellonomicon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This item provides Ahri with additional ability power and magic penetration. It's a great choice
                    against teams with a lot of healing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ahri's Skins</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the various skins available for Ahri.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <img
                alt="Skin 1"
                className="aspect-square object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <img
                alt="Skin 2"
                className="aspect-square object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <img
                alt="Skin 3"
                className="aspect-square object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <img
                alt="Skin 4"
                className="aspect-square object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
              <img
                alt="Skin 5"
                className="aspect-square object-cover rounded-lg"
                height="200"
                src="/placeholder.svg"
                width="200"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 League of Legends Wiki. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}