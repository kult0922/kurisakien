import { Separator } from '~/components/ui/separator';

type Props = {
  text: string;
};

export const SectionTitle = ({ text }: Props) => {
  return (
    <>
      <div className="p-3">
        <h1 className="p-3 text-lg">{text}</h1>
        <Separator />
      </div>
    </>
  );
};
