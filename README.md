# Huma Finance Subgraph

## Example Queries

- Deposit events

```graphql
{
  liquidityDepositeds(
    orderBy: blockTimestamp
    orderDirection: asc
    where: { blockTimestamp_gt: "1709251200" }
  ) {
    sender
    assets
    shares
    trancheType
    blockTimestamp
  }
  totalDepositeds {
    juniorAmount
    seniorAmount
    totalAmount
  }
}
```

- Drawdown events

```
{
  drawdownMades(
    orderBy: blockTimestamp
    orderDirection: asc
    where: { blockTimestamp_gt: "1709251200" }
  ) {
    borrower
    borrowAmount
    netAmountToBorrower
    blockTimestamp
  }
  totalDrawdowns {
    totalAmount
  }
}
```

- Principal payment events

```graphql
{
  principalPaymentMades(
    orderBy: blockTimestamp
    orderDirection: asc
    where: { blockTimestamp_gt: "1709251200" }
  ) {
    borrower
    amount
    blockTimestamp
  }
  totalPrincipalPayments {
    totalAmount
  }
}
```
