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
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="lg:w-1/5 w-[60%] fixed lg:static top-0 left-0 flex justify-center lg:justify-start border-b lg:border-none border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-full lg:rounded-none lg:bg-gray-200 lg:dark:bg-zinc-800/30">
          <img
            src="LOGOVOLLEY.png"
            alt="Logo Les 2 rivières Lanester Volley"
            className="w-full lg:w-[80%]"
          />
        </div>
      </div>
      <div className="w-full lg:w-4/5 flex justify-center lg:justify-center mt-24 lg:mt-0">
        <div className="relative w-full h-[300px] lg:h-[500px] flex justify-center items-center">
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
      <div className="w-full mt-8 lg:mt-16 grid text-center lg:text-left lg:grid-cols-4 gap-4">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Horaires
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            De 6h du sbah jusqu&apos;à ce que l&apos;alarme du gymnase se lance
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
                l&apos;année pour les nuls
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
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Ouais l&apos;équipe
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Ajoutez moi sur snap : FumeurDeShkeks56bzh
          </p>
        </div>
      </div>
      <table className="w-full rounded-lg border-collapse border-hidden">
        <tbody className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30        ">
          <tr className="border border-gray-300">
            <th className="border border-gray-300">Lundi</th>
            <th className="border border-gray-300">Mardi</th>
            <th className="border border-gray-300">Mercredi</th>
            <th className="border border-gray-300">Vendredi</th>
            <th className="border border-gray-300">Samedi</th>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300">
              <div className="flex flex-row justify-between p-2">
                <span className="">9h-10h30 <span className="italic">Salle Léo Lagrange </span><span className="font-bold">M9 à M15</span></span>
                <span className="border-r-[1px] border-white"></span>
                <span className="">9h-10h30 <span className="italic">Salle Jean Zay </span><span className="font-bold">M18M</span></span>
              </div>
            </td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300">
              <span className="">16h-17h <span className="italic">H. Wallon </span><span className="font-bold">M11 + M9</span></span>
            </td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300">
            </td>
            <td className="border border-gray-300">
              <span className="">17h-18h30 <span className="italic">H. Wallon </span><span className="font-bold">M13 + M15</span></span>
            </td>
            <td className="border border-gray-300">
              <span className="">18h-19h30 <span className="italic">H. Wallon </span><span className="font-bold">M18F</span></span>
            </td>

            <td className="border border-gray-300"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300"></td>
            <td className="border border-gray-300">
              <span className="">18h30-20H<span className="italic">H. Wallon </span><span className="font-bold">M18</span></span>
            </td>
            <td className="border border-gray-300">
            </td>
            <td className="border border-gray-300">
              <span className="">18h30-20H<span className="italic">H. Wallon </span><span className="font-bold">M18</span></span>
            </td>
            <td className="border border-gray-300">19h30 / 21h
              H. Wallon
              M18F
            </td>
            <td className="border border-gray-300"></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300">20h45/22h45
              Léo
              R2M + D1M
            </td>
            <td className="border border-gray-300">20h45 / 22h45
              J. Zay
              PNF + Loisirs
            </td>
            <td className="border border-gray-300">
              <div className="flex flex-row justify-between p-2">
                <span className="">20h-22h <span className="italic">Salle H. Wallon </span><span className="font-bold">D1F</span></span>
                <span className="border-r-[1px] border-white"></span>
                <span className="">21h-23h <span className="italic">Salle L. Lagrange </span><span className="font-bold">R2M</span></span>
              </div>
            </td>
            <td className="border border-gray-300">21h/23h
              H. Wallon
              PNF
            </td>
            <td className="border border-gray-300"></td>
          </tr>

        </tbody>
      </table>
    </main>
  );
}
