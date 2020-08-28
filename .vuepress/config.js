const glob = require("glob");
const markdownIt = require("markdown-it");
const meta = require("markdown-it-meta");
const fs = require("fs");
const _ = require("lodash");

const sidebar = (directory, array) => {
    return array.map(i => {
        const children = _.sortBy(
            glob
                .sync(`./${directory}/${i[1]}/*.md`)
                .map(path => {
                    const md = new markdownIt();
                    const file = fs.readFileSync(path, "utf8");
                    md.use(meta);
                    md.render(file);
                    const order = md.meta.order;
                    return { path, order };
                })
                .filter(f => f.order !== false),
            ["order", "path"]
        )
            .map(f => f.path)
            .filter(f => !f.match("README"));

        return {
            title: i[0],
            children
        };
    });
};

module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#14e6c7' }],
    ],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "BHP 百科",
            description: "BHP 百科",
        }
    },
    plugins: [['vuepress-plugin-code-copy', true]],
    base:'/',
    themeConfig: {
        sidebarDepth: 0,
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: 'BHP 官网', link: 'https://bhpnet.io' },
                    { text: 'BHP Github', link: 'https://github.com/bhpnet' },
                    { text: 'BHP 文档', link: 'https://docs.bhpnet.io' }
                ],
                sidebar: sidebar("", [
                    ["什么是区块链?", "/zh/name"],
                    ["区块链基本技术", "/zh/basic-tech"],
                    ["区块链的衍生技术", "/zh/derivative-tech"],
                    ["区块链的技术应用", "/zh/application"],
                    ["什么是Cosmos?", "/zh/cosmos"],
                    ["什么是Oracle?", "/zh/oracle"],
                    ["VM", "/zh/vm"],
                    ["什么是Ethermint ？", "/zh/ethermint"],
                    ["什么是Tendermint？", "/zh/tendermint"],
                ])
            }
        }
    }
}