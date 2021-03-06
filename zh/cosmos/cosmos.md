---
order: 1
---

# cosmos

## 介绍

Cosmos，是一个由不同的独立、平行区块链组成的网络。Cosmos 通过一系列开源工具实现这个愿景，如 Tendermint，Cosmos SDK 和 IBC，旨在让人们快速构建自定义、安全、可扩展和可互操作的区块链应用。 

**Tendermin** 是一个共识引擎和 BFT 共识算法。 在 Tendermint 之上可以使用任何编程语言构建一个状态机，Tendermint 将负责信息的（按照共识要求的一致性和安全性）复制。

**Cosmos SDK** 是一个模块化框架，用来简化构建安全的区块链应用。

**IBC** 是区块链之间的通信协议，可以被认为是区块链的 TCP/IP。 它允许快速最终性（fast-finality）的区块链以去中心化的方式相互交换价值和数据。

Cosmos的核心共识机制是Tendermint，使得Token可以跨区块链进行转移，采用的是PoS共识引擎。Cosmos上的区块链称为“分区”，其中一些分区又称为“枢纽”，不同的分区可以通过共享的枢纽来实现互相通信与互操作性。所有跨分区的代币转移都需要通过Cosmos Hub进行，相当于是Cosmos整个体系运行的核心。但是在Cosmos当前的跨链设计中，其跨链实现的关键部分IBC协议还未被部署到测试网上，未完成IBC模块的Cosmos还无法实现真正的跨链交易。

## 架构：Hub&Spoke   

每一个空间（Zone）都可以代表一个不同的区块链，也可以是同一条链的多个复制本以实现横向扩展性（Horizontal Scalability）

## Cosmos解决的问题：

**可扩展性：**工作量证明协议缓慢，昂贵，不可扩展且对环境有害。Tendermint BFT是拜占庭式容错共识引擎，可为Cosmos权益证明提供支持。

**易用性：**区块链应用程序很复杂，开发人员很难理解。Cosmos SDK是用于构建可互操作的，特定于应用程序的区块链的模块化框架。

**互通性：**区块链经济孤立无援，彼此之间无法转移资产。区块链间通信（IBC）是一种类似于TCP / IP的区块链消息传递协议。