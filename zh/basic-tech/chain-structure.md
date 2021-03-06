---
order: 2
---

# 链式结构

## 链/ Chain

链是由区块按照发生的时间顺序，通过区块的哈希值串联而成，是区块交易记录及状态变化的日志记录。

## 链下/ Off-chain

区块链系统从功能角度讲，是一个价值交换网络，链下是指不存储于区块链上的数据。

## 无代币区块链/ Token-Less Blockchain

即区块链并不通过代币进行价值交换，一般出现在不需要在节点之间转移价值并且仅在不同的已被信任方之间共享数据的情况下，如私有链。

## 创世区块/ Genesis Block

区块链中的第一个区块被称为“创世”区块。创世区块一般用于初始化，不带有交易信息。

## 区块高度/ Block Height

一个区块的高度是指在区块链中它和创世区块之间的块数。

## 分叉/ Fork

在区块链中，由矿工挖出区块并将其链接到主链上，一般来讲同一时间内只产生一个区块，如果发生同一时间内有两个区块同时被生成的情况，就会在全网中出现两个长度相同、区块里的交易信息相同但矿工签名不同或者交易排序不同的区块链，这样的情况叫做分叉。

## 软分叉/ Soft Fork

指在区块链或去中心化网络中向前兼容的分叉。向前兼容意味着，当新共识规则发布后，在去中心化架构中节点不一定要升级到新的共识规则，因为软分叉的新规则仍旧符合老的规则，所以未升级的节点仍旧能接受新的规则。

## 硬分叉/ Hard Fork

指在区块链或去中心化网络中不向前兼容的分叉，硬分叉对加密货币使用的技术进行永久更改，这种变化使得所有的新数据块与原来的块不同，旧版本不会接受新版本创建的区块，要实现硬分叉所有用户都需要切换到新版本协议上。如果新的硬分叉失败，所有的用户将回到原始数据块。

## 幽灵协议/ GHOST Protocol

通过幽灵协议，区块可以包含不只是他们父块的哈希值，也包含其父块的父块的其他子块（被称为叔块）的陈腐区块的哈希值，这确保了陈腐区块仍然有助于区块链的安全性，并能够获得一定比例的区块奖励，减少了大型矿工在区块链上的中心化倾向问题。

## 孤块/ Orphan Block

孤块是一个被遗弃的数据块。因为很多节点都在维护区块链并同时创建多个区块，但是一次只能有一个被继续继承，而其它被遗弃的数据块就是孤块。

## 陈腐区块/ Stale Block

是父块的父块的“其他”子块，或更一般的说是祖先的其他子块，但不是自己的祖先，如果 A 是 B 的一个叔块，那 B 是 A 的侄块。