import { LiquidityDeposited as LiquidityDepositedEvent } from "../generated/TrancheVault/TrancheVault";
import { LiquidityDeposited } from "../generated/schema";

export function handleLiquidityDeposited(event: LiquidityDepositedEvent): void {
  let entity = new LiquidityDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.assets = event.params.assets;
  entity.shares = event.params.shares;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
