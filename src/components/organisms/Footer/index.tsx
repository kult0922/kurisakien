import Link from 'next/link';
import { ExternalLink } from '~/components/atoms/ExternalLink';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { routing } from '~/constants/routing';

export const Footer: React.FC = () => {
  return (
    <>
      <Separator className="mb-3" />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap">
          <Button variant="secondary" className="m-2">
            <a target="_blank" rel="noopener noreferrer" href="https://note.com/kurisakien">
              ブログ 📘
            </a>
          </Button>

          <Button variant="secondary" className="m-2">
            <Link
              href={{
                pathname: routing.docs.commission,
              }}
              passHref
            >
              送料・手数料について 🚛
            </Link>
          </Button>

          <Button variant="secondary" className="m-2">
            <Link
              href={{
                pathname: routing.docs.privacy,
              }}
              passHref
            >
              プライバシーポリシー 🔑
            </Link>
          </Button>

          <Button variant="secondary" className="m-2">
            <Link
              href={{
                pathname: routing.docs.low,
              }}
              passHref
            >
              特定商取引法に基づく表示 📜
            </Link>
          </Button>
        </div>

        <div className="flex text-slate-500 mt-2 mb-6">
          <div className="mx-2">developed by</div>
          <ExternalLink href="https://twitter.com/KK_sep_TT">@KK_sep_TT</ExternalLink>
          <div className="mx-2">and</div>
          <ExternalLink href="https://twitter.com/PeeI043">@PeeI043</ExternalLink>
        </div>
      </div>
    </>
  );
};
