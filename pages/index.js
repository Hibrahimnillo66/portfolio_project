import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
import Image from '@/components/Image';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';

import NewsletterForm from '@/components/NewsletterForm';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 hover:text-blue-600 dark:text-white md:text-7xl">
              Abraham Granillo
            </h1>
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-zinc-600 hover:text-red-600 dark:text-white md:text-2xl">
              Portfolio of an artsy guy who codes a bit.
            </h2>
          </div>
          <div className="relative mb-8 ml-10 w-full sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/perfil1.PNG"
              alt="avatar"
              width="250px"
              height="300px"
              className="rounded-full border-4 border-white"
              style={{
                borderRadius: '46% 54% 64% 36% / 61% 44% 56% 39%',
              }}
            />
          </div>
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            Graduated from{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800"
              href="https://www.uanl.mx/"
              rel="noreferrer"
              target="_blank"
            >
              UANL
            </a>
            , Passionate and results-driven Software Engineer with expertise in
            <span className="focusable rounded-sm font-medium text-zinc-800">
              {' '}
              React, JavaScript, Node, OOP.
            </span>
            Skilled in front-end and back-end development, I bring a collaborative mindset and a
            keen eye for detail to every project. Let's connect and discuss how we can build
            exceptional software solutions together.{' '}
          </p>
        </p>
        {/* <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a href="https://www.linkedin.com/in/raphaelchelly" rel="noreferrer" target="_blank">
            <svg  height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a href="https://github.com/raphaelchelly" rel="noreferrer" target="_blank">
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a href="mailto:hi@raphaelchelly.com">
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div> */}
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>
      <div className="content mb-8">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          A selection of projects I worked on in the past few years.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
      {/* <div className="content mt-12 sm:mt-24">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences</h2>
        <ul className="mt-8">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.octopia.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/static/images/workxp/octopia.jpg"
                alt="Octopia"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Octopia
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2021
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Today
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Marketing Project Manager
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.fabrilab.net/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/static/images/workxp/fabrilab2.jpg"
                alt="Octopia"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Fabrilab
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2017
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Today
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Co-founder & Project Manager
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.microsoft.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/static/images/workxp/microsoft.jpg"
                alt="Octopia"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Microsoft
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2019
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  2020
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Marketing Project Manager Intern
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.pernod-ricard.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/static/images/workxp/pernod-ricard.jpg"
                alt="Octopia"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Pernod Ricard
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  2018
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  2019
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Digital Project Manager Intern
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div> */}

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}
