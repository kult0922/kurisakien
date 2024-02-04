import { DocsFooter } from '~/components/molecules/DocsFooter';
import { PostageTable } from '~/components/organisms/PostageTable';
import { PaymentTable } from '~/components/organisms/PaymentTable';

export const CommissionDocument: React.FC = () => {
  return (
    <>
      <div className="mt-10">
        <div>送料について</div>
        <PostageTable />
      </div>
      <div className="mt-10">
        <div>手数料について</div>
        <PaymentTable />
      </div>
      <DocsFooter />
    </>
  );
};
