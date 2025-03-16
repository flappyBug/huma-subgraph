import { BigInt } from "@graphprotocol/graph-ts";
import {
  DrawdownMade as DrawdownMadeEvent,
  PrincipalPaymentMade as PrincipalPaymentMadeEvent,
} from "../generated/ReceivableBackedCreditLine/ReceivableBackedCreditLine";
import {
  DrawdownMade,
  PrincipalPaymentMade,
  TotalDrawdown,
  TotalPrincipalPayment,
} from "../generated/schema";

export function handleDrawdownMade(event: DrawdownMadeEvent): void {
  let entity = new DrawdownMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.borrower = event.params.borrower;
  entity.borrowAmount = event.params.borrowAmount;
  entity.netAmountToBorrower = event.params.netAmountToBorrower;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let totalDrawdown = TotalDrawdown.load("total");
  if (totalDrawdown == null) {
    totalDrawdown = new TotalDrawdown("total");
    totalDrawdown.totalAmount = BigInt.fromI32(0);
  }
  totalDrawdown.totalAmount = totalDrawdown.totalAmount.plus(
    event.params.borrowAmount
  );
  totalDrawdown.save();
}

export function handlePrincipalPaymentMade(
  event: PrincipalPaymentMadeEvent
): void {
  let entity = new PrincipalPaymentMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.borrower = event.params.borrower;
  entity.payer = event.params.payer;
  entity.amount = event.params.amount;
  entity.nextDueDate = event.params.nextDueDate;
  entity.principalDue = event.params.principalDue;
  entity.unbilledPrincipal = event.params.unbilledPrincipal;
  entity.principalDuePaid = event.params.principalDuePaid;
  entity.unbilledPrincipalPaid = event.params.unbilledPrincipalPaid;

  entity.by = event.params.by;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let totalPrincipalPayment = TotalPrincipalPayment.load("total");
  if (totalPrincipalPayment == null) {
    totalPrincipalPayment = new TotalPrincipalPayment("total");
    totalPrincipalPayment.totalAmount = BigInt.fromI32(0);
  }
  totalPrincipalPayment.totalAmount = totalPrincipalPayment.totalAmount.plus(
    event.params.amount
  );
  totalPrincipalPayment.save();
}
