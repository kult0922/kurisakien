import { Separator } from '~/components/ui/separator';
import { Card, CardContent, CardDescription, CardTitle } from '~/components/ui/card';

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

      <Separator className="mb-8" />

      <div className="flex sm:ml-14 sm:justify-start justify-center">
        <Card className="sm:w-[500px] w-[360px]">
          <CardContent className="p-0">
            <CardTitle className="p-2">地の利・茶畑</CardTitle>
            <CardDescription className="p-2">
              春野町は、天竜川が流れる静かな山あいの里です。
              標高350ｍ、川を見下ろす茶畑には霧が立ち込め、
              辺り一面柔らかい日差しと穏やかな風に包まれます。
            </CardDescription>
            <img
              className="w-full object-cover rounded-b-lg"
              src="/image/main/sub1.JPG"
              alt="栗崎園"
            />
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="flex sm:mr-14 sm:justify-end justify-center">
        <Card className="sm:w-[500px] w-[360px]">
          <CardContent className="p-0">
            <CardTitle className="p-2">人の利・茶工場</CardTitle>
            <CardDescription className="p-2">
              朝涼しいうちに収穫し、住まいに隣接する茶工場ですぐに製茶します。
              見て、触って、香って、充実した新芽を香味豊かな茶葉に仕上げます。
            </CardDescription>
            <img
              className="w-full object-cover rounded-b-lg"
              src="/image/main/sub2.JPG"
              alt="栗崎園"
            />
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="flex sm:ml-14 sm:justify-start justify-center">
        <Card className="sm:w-[500px] w-[360px]">
          <CardContent className="p-0">
            <CardTitle className="p-2">茶縁・皆さまへ</CardTitle>
            <CardDescription className="p-2">
              春の息吹と共に揉み上げられた我が家のお茶を「春野の精」と名付けました。
              皆さまが、お茶と共に日々健やかに安らかに過ごせますようにと願っています。
            </CardDescription>
            <img
              className="w-full object-cover rounded-b-lg"
              src="/image/main/sub3.JPG"
              alt="栗崎園"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
