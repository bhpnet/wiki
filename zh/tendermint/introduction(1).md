---
order: 1
---

# Tendermint

## 介绍

Tendermint本身是弱同步，拜占庭容错，状态机复制协议，拥有优化的拜占庭容错和额外的责任制来保证当超过拜占庭容错假设上限时的情形。协议采用round robin的提议者产生方法，用同样的机制跳过一个提议者。多轮投票之间的安全性通过锁机制得到了保障。

Tendermint 的核心与应用区块链交互界面（ABCI）：Tendermint 主要由以下两部分组成：区块链共识引擎和上层应用接口。共识引擎称为：Tendermint Core, 它用来保证系统每个节点内交易的顺序是一致的。上层应用接口称为 Application Blockchain Interface (ABCI), 保证交易能被应用处理，不受编程语言的限制。

Tendermint 也可以被用于保证任意应用的状态一致性。它可以作为一个即插即用的共识组件来替代已有的共识引擎。所以，开发人员可以将任意版本的Ethereal代码(Rust,Go,或Haskell)，把它当作一个ABCI运行在Tendermint共识引擎之上。这就诞生了一个新的Ethereum 。基于这种架构，应用的开发者可以方便地实现自己的区块链。

## 主要特性：

可以快速开发出自吖己的区块链应用而无需关注共识和P2P网络。

能够很好的兼容到Cosmos跨链生态中，因为Tendermint是Cosmos的核心技术。

开发支持任何编程语言的区块链。