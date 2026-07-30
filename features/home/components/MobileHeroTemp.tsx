import Image from "next/image";
import { Icon } from "@/components/ui/icons";

/**
 * Temporary mobile hero mockup — matches reference screenshot exactly.
 * Image placeholders in place of real assets. Remove once real design lands.
 */
export function MobileHeroTemp() {
  return (
    <section className="flex h-[100svh] flex-col bg-white px-4 pb-5 pt-5 md:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black">
            <path d="M4 2h2v20H4zM6 2h11l-3 4 3 4H6z" />
          </svg>
          <span className="text-lg font-bold tracking-tight text-black">
            Fundamenta<sup className="text-[9px]">&reg;</sup>
          </span>
        </div>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center border border-black/10"
        >
          <Icon name="menu" className="h-4 w-4 text-black" />
        </button>
      </div>

      <h1 className="mt-6 text-[2.15rem] font-medium leading-[1.05] tracking-tight text-black">
        You do serious work.
        <br />
        Let&rsquo;s make sure your brand proves it.
      </h1>

      <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-black/70">
        Fundamenta builds brand systems for B2B companies that get evaluated,
        not browsed. We close the gap between what you do and what buyers
        believe.
      </p>

      <div className="mt-auto flex h-44 items-stretch gap-4">
        <div className="relative w-[42%] overflow-hidden bg-neutral-200">
          <Image
            src="/images/founder-vivek.png"
            alt="Vivek Chandanshiv, Founder at Fundamenta"
            fill
            sizes="42vw"
            className="object-cover grayscale"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="space-y-0.5 text-xs text-black">
            <p>Brand Strategy &amp; Identity</p>
            <p>B2B Websites That Sell</p>
            <p>Sales &amp; Marketing Collateral</p>
            <a href="#" className="inline-block text-blue-600 underline-offset-2 hover:underline">
              Brand Trust Audit&rarr;48 Hours
            </a>
          </div>

          <div className="border border-black/10 p-2">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="h-2 w-2 bg-blue-600" />
              <span>
                FOUNDER
                <br />
                <span className="text-neutral-500">at Fundamenta</span>
              </span>
            </div>
            <p className="mt-1 text-sm font-bold text-black">Vivek Chandanshiv</p>
            <button
              type="button"
              className="mt-1.5 w-full bg-black py-1.5 text-xs font-medium text-white"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
