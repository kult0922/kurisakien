import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

export const PostageTable: React.FC = () => {
  return (
    <>
      <Table className="">
        <TableCaption>送料について</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border-r whitespace-nowrap">合計購入額</TableHead>
            <TableHead className="border-l border-r whitespace-nowrap">静岡県内</TableHead>
            <TableHead className="border-l border-r">関東、北陸、中部、関西</TableHead>
            <TableHead className="border-l border-r">東北、中国、四国</TableHead>
            <TableHead className="border-l">九州、沖縄、北海道</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border whitespace-nowrap">5000円未満</TableCell>
            <TableCell className="border whitespace-nowrap">650円</TableCell>
            <TableCell className="border whitespace-nowrap">750円</TableCell>
            <TableCell className="border whitespace-nowrap">950円</TableCell>
            <TableCell className="border whitespace-nowrap">1200円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border whitespace-nowrap">5000円以上</TableCell>
            <TableCell className="border whitespace-nowrap">300円</TableCell>
            <TableCell className="border whitespace-nowrap">400円</TableCell>
            <TableCell className="border whitespace-nowrap">500円</TableCell>
            <TableCell className="border whitespace-nowrap">600円</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-r whitespace-nowrap">10000円以上</TableCell>{' '}
            <TableCell className="text-center border-t" colSpan={4}>
              無料
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
