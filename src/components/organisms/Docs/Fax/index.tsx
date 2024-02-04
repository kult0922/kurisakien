import { DocsFooter } from '~/components/molecules/DocsFooter';

export const FaxDocument: React.FC = () => {
  return (
    <>
      <div>価格表の商品番号、住所などの必要事項を注文表に記入の上、Faxにてお送り下さい。</div>
      <div className="flex">
        <div className="mx-2">
          <a className="underline" href="/pdf/kakaku_v2.pdf" download="価格表.pdf">
            価格表
          </a>
        </div>
        <div className="mx-2">
          <a className="underline" href="/pdf/tyumonhyou.pdf" download="注文表.pdf">
            注文表
          </a>
        </div>
      </div>
      <DocsFooter />
    </>
  );
};
