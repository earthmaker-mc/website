import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    maps: [{
        type: "doc",
        label: "Introduction",
        id: "index"
    }, {
        type: "category",
        label: "Europe",
        items: [{
            type: "autogenerated",
            dirName: "europe"
        }]
    }, {
        type: "category",
        label: "Asia",
        items: [{
            type: "autogenerated",
            dirName: "asia"
        }]
    }, {
        type: "category",
        label: "Africa",
        items: [{
            type: "autogenerated",
            dirName: "africa"
        }]
    }],
};

export default sidebars;