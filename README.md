# esync-subgraph
Subgraphs for several smart contracts running on the esync.network blockchain

RPC url for esync.network mainnet: https://rpc.esync.network

## ABIs

### SwapContract

Address: [0xc88254EE5f92fc148d235fD666B4fEd3386b71bd](https://explorer.esync.network/address/0xc88254EE5f92fc148d235fD666B4fEd3386b71bd)

Event:

```Solidity
event Swapped(address indexed, uint256 actAmount, uint256 ecsAmount)
```

### eVault

Address: multiple, individual address per Vault Campaign. Check config in eVaultCampaignsContract under [0x9FC1Ce0B91C6aCB23eBB42002207c7E194fA9cbc](https://explorer.esync.network/address/0x9FC1Ce0B91C6aCB23eBB42002207c7E194fA9cbc).

Events:

```Solidity

event VaultLock(
    uint256 frozenAmountId,
    uint256 amount,
    uint256 rate,
    uint256 subscription
);

event VaultReward(
    uint256 frozenAmountId,
    uint256 amount,
    uint256 rate,
    uint256 subscription
);

event VaultReturn(
    uint256 frozenAmountId,
    uint256 amount,
    uint256 rate,
    uint256 subscription
);

```

### Voting

Address: multiple, individual address per voting. Check addresses in `deployedContracts` in VotingContractFactory.

Event:

```Solidity
event Voted(address indexed voter, bytes option);
```