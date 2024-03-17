import { Separator } from '~/components/ui/separator';
import { LayoutGrid } from '~/components/ui/layout-grid';

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">地の利・茶畑</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        春野町は、天竜川が流れる静かな山あいの里です。 標高350ｍ、川を見下ろす茶畑には霧が立ち込め、
        辺り一面柔らかい日差しと穏やかな風に包まれます。
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">人の利・茶工場</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        朝涼しいうちに収穫し、住まいに隣接する茶工場ですぐに製茶します。
        見て、触って、香って、充実した新芽を香味豊かな茶葉に仕上げます。
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">茶縁・皆さまへ</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        春の息吹と共に揉み上げられた我が家のお茶を「春野の精」と名付けました。
        皆さまが、お茶と共に日々健やかに安らかに過ごせますようにと願っています。
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">霧のかかる茶園</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        霧のかかる茶園で育まれたお茶は、春野の自然の恵みをたっぷりと受けて育ちます。
        お茶の味わいは、その自然の恵みが生み出すものです。
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    topStart: true,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/image/main/sub1.JPG',
  },
  {
    id: 2,
    topStart: true,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/image/main/sub2.JPG',
  },
  {
    id: 3,
    topStart: true,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/image/main/sub3.JPG',
  },
  {
    id: 4,
    topStart: false,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/image/main/sub4.JPG',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="hidden sm:block absolute top-[30px] p-3 right-[100px] [writing-mode:vertical-rl] bg-white">
            霧の里、春野町のお茶農家
          </div>
          <div className="hidden sm:block absolute top-[60px] p-3 right-[200px] [writing-mode:vertical-rl] bg-white">
            <p>ちいさいながらも、</p>
            <p>自然と共に日々お茶づくりに励んでいます。</p>
          </div>
          <img className="w-full" src="/image/main/home.JPG" alt="栗崎園" />
        </div>
      </div>
      <div className="ml-4 mt-4">
        <div className="text-2xl">About</div>
        <div className="text-slate-500 text-sm">栗崎園のお茶</div>
      </div>

      <Separator className="" />

      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </>
  );
};
