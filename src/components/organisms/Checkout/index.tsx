import React from 'react';
import { BoxProps } from '~/lib/styled';
import { useCheckout } from '~/store/organisms/Checkout';
import { PaymentTable } from '~/components/organisms/PaymentTable';
import { PostageTable } from '~/components/organisms/PostageTable';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Separator } from '~/components/ui/separator';
import { Textarea } from '~/components/ui/textarea';

interface Props extends BoxProps {
  style?: React.CSSProperties;
}

export const Checkout: React.FC<Props> = ({ style, ...props }) => {
  const { onSubmit, form } = useCheckout();

  return (
    <>
      <div className="mb-24">
        <div className="flex justify-center text-lg mt-4">お客様情報</div>
        <Separator className="mt-2" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-0">
            <table className="border-separate border-spacing-y-3 ml-auto mr-auto">
              <tbody>
                <thead>
                  <tr>
                    <th scope="col" className="w-16"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tr className="my-10">
                  <td>
                    <FormLabel className="text-xs">氏名</FormLabel>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="姓" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="名" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </td>
                </tr>

                <tr className="">
                  <td>
                    <FormLabel className="text-xs">電話番号</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="123-456-789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FormLabel className="text-xs">メール</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="example@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FormLabel className="text-xs">郵便番号</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FormLabel className="text-xs">住所</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="○県△市□町１−２−３ Kハイツ ○号室" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FormLabel className="text-xs">配送地域</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1 border p-3 rounded-md"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="shizuoka" />
                                </FormControl>
                                <FormLabel className="font-normal">静岡県内</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="near" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  関東、北陸、中部、関西
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="middle" />
                                </FormControl>
                                <FormLabel className="font-normal">東北、中国、四国</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="far" />
                                </FormControl>
                                <FormLabel className="font-normal">九州、沖縄、北海道</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <FormLabel className="whitespace-nowrap text-xs">支払い方法</FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="paymentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1 border p-3 rounded-md"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="card" />
                                </FormControl>
                                <FormLabel className="font-normal">クレジットカード</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="postal" />
                                </FormControl>
                                <FormLabel className="font-normal">郵便振り込み</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="convenience" />
                                </FormControl>
                                <FormLabel className="font-normal">コンビニ決済</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="bank" />
                                </FormControl>
                                <FormLabel className="font-normal">銀行振り込み</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="delivery" />
                                </FormControl>
                                <FormLabel className="font-normal">代金引換払い</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormLabel className="text-xs">
                      <div>ご意見</div>
                      <div>ご要望</div>
                      <div> (任意)</div>
                    </FormLabel>
                  </td>
                  <td>
                    <FormField
                      control={form.control}
                      name="voice"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea {...field}></Textarea>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="text-right">
                    <Button type="submit">注文内容確認</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Form>
      </div>

      <PostageTable />
      <PaymentTable />
    </>
  );
};
