'use client'

import { PropsWithChildren, useEffect } from 'react'
import { CaptionedFigure } from '../components/CaptionedFigure'
import classNames from 'classnames'

export const K = ({ children }: PropsWithChildren<{}>) => (
  <sub className="text-xs">{children}</sub>
)
export const H = ({ children }: PropsWithChildren<{}>) => (
  <span className="underline border-orange-500/30">{children}</span>
)
export const G = ({
  children,
  hidden = true,
}: PropsWithChildren<{
  hidden?: boolean
}>) => (
  <span className={classNames('opacity-30', hidden && 'hidden')}>
    {children}
  </span>
)
export const B = ({ children }: PropsWithChildren<{}>) => (
  <sub className="text-xs hidden">{children}</sub>
)
export const Bf = ({
  children,
  highlight,
}: PropsWithChildren<{ highlight?: boolean }>) => (
  <span
    className={classNames(
      'border-solid mx-0.5 ',
      highlight && 'border-orange-500/50'
    )}
  >
    {children}
  </span>
)

const 楚 = <span className="text-red-500">楚</span>
const 人 = <span className="text-orange-500">人</span>
const 有 = <span className="text-yellow-500">有</span>
const 鬻 = <span className="text-green-500">鬻</span>
const 盾 = <span className="text-blue-500">盾</span>
const 與 = <span className="text-indigo-500">與</span>
const 矛 = <span className="text-purple-500">矛</span>
const 者 = <span className="text-pink-500">者</span>

export const HanlibKaeritenToKakikudashibun = () => {
  useEffect(() => {
    // hide all the kaeriten steps except the first by changing display to none
    // then cycle through kaeriten steps, showing one at a time

    let currentStep = 0

    const steps = document.querySelectorAll(
      '.kaeriten-step'
    ) as NodeListOf<HTMLDivElement>
    steps.forEach((step, index) => {
      if (index !== currentStep) {
        step.style.display = 'none'
      }
    })
    const interval = setInterval(() => {
      console.log(currentStep)
      steps[currentStep].style.display = 'none'
      currentStep += 1
      if (currentStep >= steps.length) {
        currentStep = 0
      }
      steps[currentStep].style.display = 'block'
    }, 1000)
    return () => {
      clearInterval(interval)
      steps.forEach((step) => {
        step.style.display = 'block'
      })
    }
  }, [])
  return (
    <CaptionedFigure
      className="w-[300px] float-left clear-left mr-4"
      caption={
        <>
          The <i>kaeriten</i> can be used as instructions for rearranging the
          words of a Chinese sentence into Japanese word order.
        </>
      }
      captionAlign="left"
    >
      <div className="kaeriten-steps-container">
        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            <H>
              {楚}
              {人}
            </H>
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            {盾}
            {與}
            <K>レ一</K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            <H>
              {楚}
              {人}
              <G>に</G>
              ...
            </H>
          </div>
        </div>
        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            <H>
              {有}
              <K>下</K>
            </H>
            {鬻}
            <K>二</K>
            {盾}
            {與}
            <K>レ一</K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            <H>
              ...
              <Bf>
                <B>上</B>
                {有}
                <G>り</G>
              </Bf>
            </H>
          </div>
        </div>
        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            <H>
              {鬻}
              <K>二</K>
            </H>
            {盾}
            {與}
            <K>レ一</K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            <H>
              ...
              <Bf>
                <B>一</B>
                {鬻}
                <G>ぐ</G>
              </Bf>
            </H>
            <Bf>
              <B>上</B>
              {有}
              <G>り</G>
            </Bf>
          </div>
        </div>

        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            <H>{盾}</H>
            {與}
            <K>レ一</K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            <H>
              {盾}
              <G>と</G>...
            </H>
            <Bf>
              <B>一</B>
              {鬻}
              <G>ぐ</G>
            </Bf>
            <Bf>
              <B>上</B>
              {有}
              <G>り</G>
            </Bf>
          </div>
        </div>

        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            {盾}
            {與}
            <K>
              <H>レ</H>一
            </K>
            <H>{矛}</H>
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            {盾}
            <G>と</G>
            <H>{矛}...</H>
            <Bf>
              <B>一</B>
              {鬻}
              <G>ぐ</G>
            </Bf>
            <Bf>
              <B>上</B>
              {有}
              <G>り</G>
            </Bf>
          </div>
        </div>

        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            {盾}
            <H>{與}</H>
            <K>
              レ<H>一</H>
            </K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            {盾}
            <G>と</G>
            {矛}
            <H>
              {與}
              <G>を</G>
              <B>一</B>
            </H>
            <Bf highlight>
              {鬻}
              <G>ぐ</G>
            </Bf>
            <H>...</H>
            <Bf>
              <B>上</B>
              {有}
              <G>り</G>
            </Bf>
          </div>
        </div>

        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            {盾}
            {與}
            <K>レ一</K>
            {矛}
            <H>
              <H>
                {者}
                <K>上</K>
              </H>
            </H>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            {盾}
            <G>と</G>
            {矛}
            {與}
            <G>を</G>
            {鬻}
            <G>ぐ</G>
            <H>
              {者}
              <B>上</B>
            </H>
            <Bf highlight>
              {有}
              <G>り</G>
            </Bf>
          </div>
        </div>

        <div className="kaeriten-step pb-1 mb-1">
          <div className="text-3xl">
            {楚}
            {人}
            {有}
            <K>下</K>
            {鬻}
            <K>二</K>
            {盾}
            {與}
            <K>レ一</K>
            {矛}
            {者}
            <K>上</K>
          </div>
          <div className="text-2xl border-[1px]">
            {楚}
            {人}
            <G>に</G>
            {盾}
            <G>と</G>
            {矛}
            {與}
            <G>を</G>
            {鬻}
            <G>ぐ</G>
            {者}
            <B>上</B>
            {有}
            <G>り</G>
          </div>
        </div>
      </div>
    </CaptionedFigure>
  )
}
