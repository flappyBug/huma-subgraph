import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  BillRefreshed,
  CreditClosedAfterPayOff,
  DrawdownMade,
  DrawdownMadeWithReceivable,
  Initialized,
  PaymentMade,
  PaymentMadeWithReceivable,
  PoolConfigCacheUpdated,
  PoolConfigChanged,
  PrincipalPaymentMade,
  PrincipalPaymentMadeWithReceivable,
  Upgraded
} from "../generated/ReceivableBackedCreditLine/ReceivableBackedCreditLine"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createBillRefreshedEvent(
  creditHash: Bytes,
  newDueDate: BigInt,
  nextDue: BigInt,
  totalPastDue: BigInt
): BillRefreshed {
  let billRefreshedEvent = changetype<BillRefreshed>(newMockEvent())

  billRefreshedEvent.parameters = new Array()

  billRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "creditHash",
      ethereum.Value.fromFixedBytes(creditHash)
    )
  )
  billRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "newDueDate",
      ethereum.Value.fromUnsignedBigInt(newDueDate)
    )
  )
  billRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "nextDue",
      ethereum.Value.fromUnsignedBigInt(nextDue)
    )
  )
  billRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "totalPastDue",
      ethereum.Value.fromUnsignedBigInt(totalPastDue)
    )
  )

  return billRefreshedEvent
}

export function createCreditClosedAfterPayOffEvent(
  creditHash: Bytes,
  by: Address
): CreditClosedAfterPayOff {
  let creditClosedAfterPayOffEvent =
    changetype<CreditClosedAfterPayOff>(newMockEvent())

  creditClosedAfterPayOffEvent.parameters = new Array()

  creditClosedAfterPayOffEvent.parameters.push(
    new ethereum.EventParam(
      "creditHash",
      ethereum.Value.fromFixedBytes(creditHash)
    )
  )
  creditClosedAfterPayOffEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return creditClosedAfterPayOffEvent
}

export function createDrawdownMadeEvent(
  borrower: Address,
  borrowAmount: BigInt,
  netAmountToBorrower: BigInt
): DrawdownMade {
  let drawdownMadeEvent = changetype<DrawdownMade>(newMockEvent())

  drawdownMadeEvent.parameters = new Array()

  drawdownMadeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  drawdownMadeEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  drawdownMadeEvent.parameters.push(
    new ethereum.EventParam(
      "netAmountToBorrower",
      ethereum.Value.fromUnsignedBigInt(netAmountToBorrower)
    )
  )

  return drawdownMadeEvent
}

export function createDrawdownMadeWithReceivableEvent(
  borrower: Address,
  receivableId: BigInt,
  amount: BigInt,
  by: Address
): DrawdownMadeWithReceivable {
  let drawdownMadeWithReceivableEvent =
    changetype<DrawdownMadeWithReceivable>(newMockEvent())

  drawdownMadeWithReceivableEvent.parameters = new Array()

  drawdownMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  drawdownMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam(
      "receivableId",
      ethereum.Value.fromUnsignedBigInt(receivableId)
    )
  )
  drawdownMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  drawdownMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return drawdownMadeWithReceivableEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createPaymentMadeEvent(
  borrower: Address,
  payer: Address,
  amount: BigInt,
  yieldDuePaid: BigInt,
  principalDuePaid: BigInt,
  unbilledPrincipalPaid: BigInt,
  yieldPastDuePaid: BigInt,
  lateFeePaid: BigInt,
  principalPastDuePaid: BigInt,
  by: Address
): PaymentMade {
  let paymentMadeEvent = changetype<PaymentMade>(newMockEvent())

  paymentMadeEvent.parameters = new Array()

  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "yieldDuePaid",
      ethereum.Value.fromUnsignedBigInt(yieldDuePaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "principalDuePaid",
      ethereum.Value.fromUnsignedBigInt(principalDuePaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "unbilledPrincipalPaid",
      ethereum.Value.fromUnsignedBigInt(unbilledPrincipalPaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "yieldPastDuePaid",
      ethereum.Value.fromUnsignedBigInt(yieldPastDuePaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "lateFeePaid",
      ethereum.Value.fromUnsignedBigInt(lateFeePaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "principalPastDuePaid",
      ethereum.Value.fromUnsignedBigInt(principalPastDuePaid)
    )
  )
  paymentMadeEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return paymentMadeEvent
}

export function createPaymentMadeWithReceivableEvent(
  borrower: Address,
  receivableId: BigInt,
  amount: BigInt,
  by: Address
): PaymentMadeWithReceivable {
  let paymentMadeWithReceivableEvent =
    changetype<PaymentMadeWithReceivable>(newMockEvent())

  paymentMadeWithReceivableEvent.parameters = new Array()

  paymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  paymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam(
      "receivableId",
      ethereum.Value.fromUnsignedBigInt(receivableId)
    )
  )
  paymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  paymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return paymentMadeWithReceivableEvent
}

export function createPoolConfigCacheUpdatedEvent(
  poolConfig: Address
): PoolConfigCacheUpdated {
  let poolConfigCacheUpdatedEvent =
    changetype<PoolConfigCacheUpdated>(newMockEvent())

  poolConfigCacheUpdatedEvent.parameters = new Array()

  poolConfigCacheUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "poolConfig",
      ethereum.Value.fromAddress(poolConfig)
    )
  )

  return poolConfigCacheUpdatedEvent
}

export function createPoolConfigChangedEvent(
  newPoolConfig: Address,
  oldPoolConfig: Address
): PoolConfigChanged {
  let poolConfigChangedEvent = changetype<PoolConfigChanged>(newMockEvent())

  poolConfigChangedEvent.parameters = new Array()

  poolConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newPoolConfig",
      ethereum.Value.fromAddress(newPoolConfig)
    )
  )
  poolConfigChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldPoolConfig",
      ethereum.Value.fromAddress(oldPoolConfig)
    )
  )

  return poolConfigChangedEvent
}

export function createPrincipalPaymentMadeEvent(
  borrower: Address,
  payer: Address,
  amount: BigInt,
  nextDueDate: BigInt,
  principalDue: BigInt,
  unbilledPrincipal: BigInt,
  principalDuePaid: BigInt,
  unbilledPrincipalPaid: BigInt,
  by: Address
): PrincipalPaymentMade {
  let principalPaymentMadeEvent =
    changetype<PrincipalPaymentMade>(newMockEvent())

  principalPaymentMadeEvent.parameters = new Array()

  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "nextDueDate",
      ethereum.Value.fromUnsignedBigInt(nextDueDate)
    )
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "principalDue",
      ethereum.Value.fromUnsignedBigInt(principalDue)
    )
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "unbilledPrincipal",
      ethereum.Value.fromUnsignedBigInt(unbilledPrincipal)
    )
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "principalDuePaid",
      ethereum.Value.fromUnsignedBigInt(principalDuePaid)
    )
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam(
      "unbilledPrincipalPaid",
      ethereum.Value.fromUnsignedBigInt(unbilledPrincipalPaid)
    )
  )
  principalPaymentMadeEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return principalPaymentMadeEvent
}

export function createPrincipalPaymentMadeWithReceivableEvent(
  borrower: Address,
  receivableId: BigInt,
  amount: BigInt,
  by: Address
): PrincipalPaymentMadeWithReceivable {
  let principalPaymentMadeWithReceivableEvent =
    changetype<PrincipalPaymentMadeWithReceivable>(newMockEvent())

  principalPaymentMadeWithReceivableEvent.parameters = new Array()

  principalPaymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  principalPaymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam(
      "receivableId",
      ethereum.Value.fromUnsignedBigInt(receivableId)
    )
  )
  principalPaymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  principalPaymentMadeWithReceivableEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )

  return principalPaymentMadeWithReceivableEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
