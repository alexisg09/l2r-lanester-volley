"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    { src: '/01.png', alt: 'Image 1' },
    { src: '/02.png', alt: 'Image 2' },
    { src: '/03.png', alt: 'Image 3' },
    { src: '/04.png', alt: 'Image 4' },
    { src: '/05.png', alt: 'Image 5' },
    { src: '/06.png', alt: 'Image 6' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle à la désactivation du composant
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="lg:w-1/5 w-[25%]  fixed left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-[100%] lg:border lg:bg-gray-200 p-2 lg:dark:bg-zinc-800/30">
          <img
            src="LOGOVOLLEY.png"
            alt="Logo Les 2 rivières Lanester Volley"
            className="lg:w-full w-1/4"
          />
        </div>
      </div>
      <div className="w-full h-full justify-center relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex w-[500px] h-[500px]">
          {images.map((image, index) => (
            <Image
              key={index}
              className={`transition-opacity duration-1000 drop-shadow-[0_0_0.8rem_#149B4E70] ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              src={image.src}
              alt={image.alt}
              objectFit="contain"
              priority
              layout="fill"
            />
          ))}
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Horaires
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            De 6h du sbah jusqu'à ce que l'alarme du gymnase se lance
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Prix
          </h2>
          <ul>
            <li>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                <span className="font-bold">
                  400€{' '}
                </span>
                l'année pour les nuls
              </p>
            </li>
            <li>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                <span className="font-bold">
                  Gratuit{' '}
                </span>
                pour les mecs bouillants
              </p>
            </li>

          </ul>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Réseaux
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 font-bold [&>*]:after:content-['-']">
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Facebook{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Instagram{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Snapchat{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Twitter{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Thread{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              BeSport{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Tinder{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Fruitz{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              LeBonCoin{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Vinted{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              TooGooToGo{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Pornhub{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              France Travail{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              La CAF du Morbihan{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap pr-2">
              Boulangerie Pedron{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              E.Leclerc Lanester{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Quai 9 Lanester{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Le Nemrut Kebab{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              India Café{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Boîte de nuit Le Passeport{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Parc Jules Ferry{' '}
            </a>
            <a href="#" className="hover:underline whitespace-nowrap  pr-2">
              Le nouveau pont là{' '}
            </a>
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Ouais l'équipe
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Ajoutez moi sur snap : FumeurDeShkeks56bzh
          </p>
        </a>
      </div>
    </main>
  );
}
