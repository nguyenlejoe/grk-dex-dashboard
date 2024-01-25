'use client'
import { Chain } from "@covalenthq/client-sdk"
import { useRouter } from "next/navigation";
import { XYKWalletTransactionsListView, XYKWalletPoolListView  } from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

export default function Account({ params }: { params: { chain: string, dex: string } }) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Account
        </h1>
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Pools
        </h2>
        <XYKWalletPoolListView
          chain_name={params.chain}
          dex_name={params.dex}
          wallet_address={"0xfC43f5F9dd45258b3AFf31Bdbe6561D97e8B71de"}
        />
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Transactions
        </h2>
        <XYKWalletTransactionsListView
          chain_name={params.chain}
          dex_name={params.dex}
          wallet_address={"0xfC43f5F9dd45258b3AFf31Bdbe6561D97e8B71de"}
        />
        <Flex onClick={()=>{
          router.back()
        }}>
          <Button>Back</Button>
        </Flex>
    </div>
  )

}
