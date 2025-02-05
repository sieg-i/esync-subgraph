import { Swapped } from '../generated/SwapContract/SwapContract'
import { SwapEvent } from '../generated/schema'

export function handleSwapped(event: Swapped): void {
  let swapEvent = new SwapEvent(event.transaction.hash.concatI32(event.logIndex.toI32()))
  
  swapEvent.sender = event.params.sender
  swapEvent.actAmount = event.params.actAmount
  swapEvent.ecsAmount = event.params.ecsAmount
  swapEvent.timestamp = event.block.timestamp
  swapEvent.blockNumber = event.block.number
  
  swapEvent.save()
}