import { Swapped } from '../generated/SwapContract/SwapContract'
import { SwapEvent, TotalStats } from '../generated/schema'
import { BigInt } from "@graphprotocol/graph-ts"

export function handleSwapped(event: Swapped): void {
  let swapEvent = new SwapEvent(event.transaction.hash.concatI32(event.logIndex.toI32()))
  
  swapEvent.sender = event.params.sender
  swapEvent.actAmount = event.params.actAmount
  swapEvent.ecsAmount = event.params.ecsAmount
  swapEvent.timestamp = event.block.timestamp
  swapEvent.blockNumber = event.block.number
  
  swapEvent.save()

  const totalSwapped = "totalActAmountSwapped";
  let stats = TotalStats.load(totalSwapped)
  if (!stats) {
    stats = new TotalStats(totalSwapped)
    stats.total = BigInt.fromI32(0);
  }
  
  stats.total = stats.total.plus(event.params.actAmount)
  stats.save()
}