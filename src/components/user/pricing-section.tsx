'use client'

import { RadioGroup } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { routes } from '@/constants/routes'
import type { Props } from '@/constants/types'

const plans = [
  { id: 1, name: 'Monthly', pricei: 7, pricev: 199 },
  { id: 2, name: 'Annually', pricei: 70, pricev: 1990 },
]

export default function PricingSection(props: Props) {
  const [plan, setplan] = useState(plans[0])

  return (
    <section
      className="bg-gray-100/2 border-t border-gray-200 py-20 pb-0 sm:py-32"
      id={props.id}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Flat pricing, no management fees.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you’re one person trying to get ahead or a big firm trying
            to take over the world, we’ve got a plan for you.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={plan}
              onChange={setplan}
              className="grid grid-cols-2"
            >
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.id}
                  value={plan}
                  className={`z-0 cursor-pointer ${plan.name === 'Monthly' ? 'rounded-l-lg' : 'rounded-r-lg'} border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400`}
                >
                  {plan.name}
                </RadioGroup.Option>
              ))}
              <div
                className={`${plan.name == 'Monthly' ? '[clip-path:inset(0_50%_0_0)]' : '[clip-path:inset(0_0_0_50%)]'}  pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300`}
              >
                <div className="py-2 text-center text-sm font-semibold text-white">
                  Monthly
                </div>
                <div className="-ml-px py-2 text-center text-sm font-semibold text-white">
                  Annually
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <section className="flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">
              <svg
                viewBox="0 0 40 40"
                className="h-6 w-6 flex-none fill-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>
              <span className="ml-4">Starter</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
              $0
            </p>
            <p className="mt-3 text-sm text-gray-700">
              You’re new to investing but want to do it right. Get started for
              free.
            </p>
            <div className="order-last mt-6">
              <ul
                role="list"
                className="-my-2 divide-y divide-gray-200 text-sm text-gray-700"
              >
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Commission-free trading</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Multi-layered encryption</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">One tip every day</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Invest up to $1,500 each month</span>
                </li>
              </ul>
            </div>
            <Link
              className="mt-6 inline-flex justify-center rounded-lg bg-gray-800 px-3 py-2 text-sm font-semibold text-white outline-2 outline-offset-2 transition-colors hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
              color="gray"
              href={routes.register}
            >
              Get started for free
            </Link>
          </section>
          <section className="flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5">
            <h3 className="flex items-center text-sm font-semibold text-gray-900">
              <svg
                viewBox="0 0 40 40"
                className="h-6 w-6 flex-none fill-gray-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>
              <span className="ml-4">Investor</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
              <span
                className={
                  plan.pricei == 7
                    ? 'transition duration-300'
                    : 'pointer-events-none translate-x-6 select-none opacity-0'
                }
              >
                ${plan.pricei}
              </span>
              <span
                className={
                  plan.pricei == 70
                    ? 'absolute transition duration-300'
                    : 'pointer-events-none absolute left-0 top-0 -translate-x-6 select-none opacity-0'
                }
              >
                ${plan.pricei}
              </span>
            </p>
            <p className="mt-3 text-sm text-gray-700">
              You’ve been investing for a while. Invest more and grow your
              wealth faster.
            </p>
            <div className="order-last mt-6">
              <ul
                role="list"
                className="-my-2 divide-y divide-gray-200 text-sm text-gray-700"
              >
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Commission-free trading</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Multi-layered encryption</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">One tip every hour</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Invest up to $15,000 each month</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Basic transaction anonymization</span>
                </li>
              </ul>
            </div>
            <Link
              className="mt-6 inline-flex justify-center rounded-lg bg-gray-800 px-3 py-2 text-sm font-semibold text-white outline-2 outline-offset-2 transition-colors hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
              color="gray"
              href={routes.register}
            >
              Subscribe
            </Link>
          </section>
          <section className="order-first flex flex-col overflow-hidden rounded-3xl bg-gray-900 p-6 shadow-lg shadow-gray-900/5 lg:order-none">
            <h3 className="flex items-center text-sm font-semibold text-white">
              <svg
                viewBox="0 0 40 40"
                className="h-6 w-6 flex-none fill-cyan-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                ></path>
              </svg>
              <span className="ml-4">VIP</span>
            </h3>
            <p className="relative mt-5 flex text-3xl tracking-tight text-white">
              <span
                className={
                  plan.pricev == 199
                    ? 'transition duration-300'
                    : 'pointer-events-none translate-x-6 select-none opacity-0'
                }
              >
                $199
              </span>
              <span
                className={
                  plan.pricev == 1990
                    ? 'absolute transition duration-300'
                    : 'pointer-events-none absolute left-0 top-0 -translate-x-6 select-none opacity-0'
                }
              >
                $1,990
              </span>
            </p>
            <p className="mt-3 text-sm text-gray-300">
              You’ve got a huge amount of assets but it’s not enough. To the
              moon.
            </p>
            <div className="order-last mt-6">
              <ul
                role="list"
                className="-my-2 divide-y divide-gray-800 text-sm text-gray-300"
              >
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Commission-free trading</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Multi-layered encryption</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Real-time tip notifications</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">No investment limits</span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">
                    Advanced transaction anonymization
                  </span>
                </li>
                <li className="flex py-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 flex-none text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      fill="currentColor"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Automated tax-loss harvesting</span>
                </li>
              </ul>
            </div>
            <Link
              className="relative mt-6 inline-flex justify-center overflow-hidden rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-white outline-2 outline-offset-2 transition-colors before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 active:before:bg-transparent"
              color="cyan"
              href={routes.register}
            >
              Subscribe
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}
