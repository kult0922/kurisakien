'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

type Card = {
  id: number;
  topStart?: boolean;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const ref = useRef(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log('外側をクリックしました！');
      setLastSelected(selected);
      setSelected(null);
    }
  };

  useEffect(() => {
    // ドキュメント全体にクリックイベントリスナーを追加
    document.addEventListener('click', handleOutsideClick, true);

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer fixed inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full',
            )}
            layout
          >
            {selected?.id === card.id && (
              <div className="h-full w-full" ref={ref}>
                <SelectedCard selected={selected} />
              </div>
            )}
            <Image card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const Image = ({ card }: { card: Card }) => {
  if (card.topStart) {
    return (
      <img
        src={card.thumbnail}
        className={cn(
          'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        )}
        alt="thumbnail"
      />
    );
  }

  return (
    <img
      src={card.thumbnail}
      className={cn(
        'object-cover object-bottom absolute inset-0 h-full w-full transition duration-200',
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-5 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
