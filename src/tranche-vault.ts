import { LiquidityDeposited as LiquidityDepositedEvent } from "../generated/JuniorTrancheVault/TrancheVault";
import { LiquidityDeposited, TotalDeposited } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

function getTotalDeposited(): TotalDeposited {
  let totalDeposited = TotalDeposited.load("total");

  if (totalDeposited == null) {
    totalDeposited = new TotalDeposited("total");
    totalDeposited.juniorAmount = BigInt.fromI32(0);
    totalDeposited.seniorAmount = BigInt.fromI32(0);
    totalDeposited.totalAmount = BigInt.fromI32(0);
  }

  return totalDeposited;
}

export function handleJuniorLiquidityDeposited(
  event: LiquidityDepositedEvent
): void {
  let entity = new LiquidityDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.assets = event.params.assets;
  entity.shares = event.params.shares;
  entity.trancheType = "junior";
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();

  // update total amount
  let totalDeposited = getTotalDeposited();
  totalDeposited.juniorAmount = totalDeposited.juniorAmount.plus(
    event.params.assets
  );
  totalDeposited.totalAmount = totalDeposited.juniorAmount.plus(
    totalDeposited.seniorAmount
  );
  totalDeposited.save();
}

export function handleSeniorLiquidityDeposited(
  event: LiquidityDepositedEvent
): void {
  let entity = new LiquidityDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.assets = event.params.assets;
  entity.shares = event.params.shares;
  entity.trancheType = "senior";
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();

  // update total amount
  let totalDeposited = getTotalDeposited();
  totalDeposited.seniorAmount = totalDeposited.seniorAmount.plus(
    event.params.assets
  );
  totalDeposited.totalAmount = totalDeposited.juniorAmount.plus(
    totalDeposited.seniorAmount
  );
  totalDeposited.save();
}
