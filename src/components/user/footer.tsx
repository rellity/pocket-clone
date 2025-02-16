import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <svg
                viewBox="0 0 40 40"
                aria-hidden="true"
                className="h-10 w-10 flex-none fill-cyan-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>
              <div className="ml-4">
                <p className="text-base font-semibold">Pocket</p>
                <p className="mt-1 text-sm">Invest at the perfect time.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <a
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:bg-slate-200/80 hover:text-gray-900 hover:delay-0"
                href="/#features"
              >
                <span className="relative z-10">Features</span>
              </a>
              <a
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:bg-slate-200/80 hover:text-gray-900 hover:delay-0"
                href="/#reviews"
              >
                <span className="relative z-10">Reviews</span>
              </a>
              <a
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:bg-slate-200/80 hover:text-gray-900 hover:delay-0"
                href="/#pricing"
              >
                <span className="relative z-10">Pricing</span>
              </a>
              <a
                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:bg-slate-200/80 hover:text-gray-900 hover:delay-0"
                href="/#faqs"
              >
                <span className="relative z-10">FAQs</span>
              </a>
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <svg
                viewBox="0 0 96 96"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"
              >
                <path
                  d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <Image
                alt=""
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                className="bg-transparent"
                src="https://pocket.tailwindui.com/_next/static/media/qr-code.9c4a9a95.svg"
              />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0 sm:rounded-2xl"></span>
                  Download the app{' '}
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <div className="w-60 min-w-0 shrink">
              <input
                id=":S4:"
                aria-label="Email address"
                placeholder="Email address"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-lg border border-gray-200 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                type="email"
              />
            </div>
            <button
              className="relative ml-4 inline-flex flex-none justify-center overflow-hidden rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-white outline-2 outline-offset-2 transition-colors before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 active:before:bg-transparent"
              type="submit"
              color="cyan"
            >
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
