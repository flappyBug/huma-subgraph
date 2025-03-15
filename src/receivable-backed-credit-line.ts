import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  BillRefreshed as BillRefreshedEvent,
  CreditClosedAfterPayOff as CreditClosedAfterPayOffEvent,
  DrawdownMade as DrawdownMadeEvent,
  DrawdownMadeWithReceivable as DrawdownMadeWithReceivableEvent,
  Initialized as InitializedEvent,
  PaymentMade as PaymentMadeEvent,
  PaymentMadeWithReceivable as PaymentMadeWithReceivableEvent,
  PoolConfigCacheUpdated as PoolConfigCacheUpdatedEvent,
  PoolConfigChanged as PoolConfigChangedEvent,
  PrincipalPaymentMade as PrincipalPaymentMadeEvent,
  PrincipalPaymentMadeWithReceivable as PrincipalPaymentMadeWithReceivableEvent,
  Upgraded as UpgradedEvent,
} from "../generated/ReceivableBackedCreditLine/ReceivableBackedCreditLine"
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
  Upgraded,
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBillRefreshed(event: BillRefreshedEvent): void {
  let entity = new BillRefreshed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.creditHash = event.params.creditHash
  entity.newDueDate = event.params.newDueDate
  entity.nextDue = event.params.nextDue
  entity.totalPastDue = event.params.totalPastDue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreditClosedAfterPayOff(
  event: CreditClosedAfterPayOffEvent,
): void {
  let entity = new CreditClosedAfterPayOff(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.creditHash = event.params.creditHash
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrawdownMade(event: DrawdownMadeEvent): void {
  let entity = new DrawdownMade(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.netAmountToBorrower = event.params.netAmountToBorrower

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrawdownMadeWithReceivable(
  event: DrawdownMadeWithReceivableEvent,
): void {
  let entity = new DrawdownMadeWithReceivable(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.receivableId = event.params.receivableId
  entity.amount = event.params.amount
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMade(event: PaymentMadeEvent): void {
  let entity = new PaymentMade(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.payer = event.params.payer
  entity.amount = event.params.amount
  entity.yieldDuePaid = event.params.yieldDuePaid
  entity.principalDuePaid = event.params.principalDuePaid
  entity.unbilledPrincipalPaid = event.params.unbilledPrincipalPaid
  entity.yieldPastDuePaid = event.params.yieldPastDuePaid
  entity.lateFeePaid = event.params.lateFeePaid
  entity.principalPastDuePaid = event.params.principalPastDuePaid
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentMadeWithReceivable(
  event: PaymentMadeWithReceivableEvent,
): void {
  let entity = new PaymentMadeWithReceivable(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.receivableId = event.params.receivableId
  entity.amount = event.params.amount
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolConfigCacheUpdated(
  event: PoolConfigCacheUpdatedEvent,
): void {
  let entity = new PoolConfigCacheUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.poolConfig = event.params.poolConfig

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolConfigChanged(event: PoolConfigChangedEvent): void {
  let entity = new PoolConfigChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newPoolConfig = event.params.newPoolConfig
  entity.oldPoolConfig = event.params.oldPoolConfig

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrincipalPaymentMade(
  event: PrincipalPaymentMadeEvent,
): void {
  let entity = new PrincipalPaymentMade(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.payer = event.params.payer
  entity.amount = event.params.amount
  entity.nextDueDate = event.params.nextDueDate
  entity.principalDue = event.params.principalDue
  entity.unbilledPrincipal = event.params.unbilledPrincipal
  entity.principalDuePaid = event.params.principalDuePaid
  entity.unbilledPrincipalPaid = event.params.unbilledPrincipalPaid
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePrincipalPaymentMadeWithReceivable(
  event: PrincipalPaymentMadeWithReceivableEvent,
): void {
  let entity = new PrincipalPaymentMadeWithReceivable(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.borrower = event.params.borrower
  entity.receivableId = event.params.receivableId
  entity.amount = event.params.amount
  entity.by = event.params.by

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
