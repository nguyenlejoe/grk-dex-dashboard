'use client'
import { useRouter } from "next/navigation";
import { XYKPoolDetailView, XYKPoolTransactionsListView, XYKTokenListView  } from "@covalenthq/goldrush-kit";
import { Flex } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";

export default function Token({ params }: { params: { chain: string, dex: string, pool_id: string} }) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-4">
        <XYKPoolDetailView
          chain_name={params.chain}
          dex_name={params.dex}
          pool_address={params.pool_id}
        />
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Transactions
        </h2>
        <XYKPoolTransactionsListView
          chain_name={params.chain}
          dex_name={params.dex}
          pool_address={params.pool_id}
        />
        <Flex onClick={()=>{
          router.back()
        }}>
          <Button>Back</Button>
        </Flex>
    </div>
  )

}
