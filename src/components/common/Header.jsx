import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const navitems = [
  {
    name: "Bill Of Quantities",
    description: "Level up your online presence",
    href: "/services/bill-of-quantities",
    icon: "/assets/homepage/services1.png",
  },
  {
    name: "Construction Management",
    description: "Ideas into mobile experiences",
    href: "/services/construction-management",
    icon: "/assets/homepage/services2.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-[9999]   bg-[#6B3CC9]  ">
        <nav
          className="mx-auto flex w-full max-w-[1440px] flex-1 items-center justify-between px-4 py-2 md:px-8 lg:py-2"
          aria-label="Global"
        >
          <Link href="/" className="">
            <Image
              src="/assets/footerLogo.png"
              alt=""
              width={269}
              height={74}
              priority={true}
              quality={100}
              className="float-left h-[75px] object-contain object-left"
            />
          </Link>

          <div className="flex w-fit items-center justify-end gap-2 md:w-full lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center rounded-full border-none border-zinc-800 px-2 py-2 text-[16px] font-normal leading-6 text-zinc-800 transition duration-200 hover:scale-[1.05] md:border-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              {!mobileMenuOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}

              {mobileMenuOpen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <Popover.Group className="hidden flex-1 gap-x-6 lg:flex lg:flex-initial xl:gap-x-12">
            <Link
              href="/services"
              className={`${
                router.pathname === "/services"
                  ? "border-zinc-600 text-white"
                  : " border-transparent text-white"
              } border-b-2 py-2 text-[16px] font-semibold  uppercase leading-6 hover:border-b-2  `}
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className={`${
                router.pathname === "/about-us"
                  ? "border-zinc-600 text-white"
                  : " border-transparent text-white"
              } border-b-2  py-2 text-[16px] font-semibold   uppercase leading-6 hover:border-b-2 `}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`${
                router.pathname === "/contact-us"
                  ? "border-zinc-600 text-white"
                  : " border-transparent text-white"
              } border-b-2  py-2 text-[16px] font-semibold  uppercase leading-6 hover:border-b-2 `}
            >
              Contact Us
            </Link>

            <Link
              href="/careers"
              className={`${
                router.pathname === "/careers"
                  ? "border-zinc-600 text-white"
                  : " border-transparent text-white"
              } border-b-2  py-2 text-[16px] font-semibold  uppercase leading-6 hover:border-b-2 `}
            >
              Careers
            </Link>
          </Popover.Group>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5"></a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root text-[14px]">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/Home"
                    className={`font-figtree -mx-3 block rounded-lg px-3 py-2 font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`font-figtree -mx-3 block rounded-lg px-3 py-2 font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50`}
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`font-figtree -mx-3 block rounded-lg px-3 py-2 font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`font-figtree -mx-3 block rounded-lg px-3 py-2 font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50`}
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
