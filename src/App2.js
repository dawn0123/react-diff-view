import React, { PureComponent } from "react";
import ReactDiffViewer from "react-diff-viewer";

const oldText = `
# react-diff-viewer を使って GitHub 風の diff を表示する

[react-diff-viewer](https://github.com/praneshr/react-diff-viewer) は React アプリケーションで GitHub 風の Diff を簡単に表示することできるライブラリです。


React.js で Diff を表示するライブラリは他にも、[react-diff-view](https://github.com/otakustay/react-diff-view) がありますが、こちらは react-diff-viewer に関する記事になりますのでお間違いなきように。

## SampleCode

[react-diff-viewer-sample](https://github.com/t0yohei/react-diff-viewer-sample)
`;
const newText = `
# react-diff-viewer を使って GitHub 風の diff を表示する

[react-diff-viewer](https://github.com/praneshr/react-diff-viewer) は React アプリケーションで GitHub 風の Diff を簡単に表示することできるライブラリです。

[公式のデモはこちら](https://praneshravi.in/react-diff-viewer/)です。

React.js で Diff を表示するライブラリは他にも、[react-diff-view](https://github.com/otakustay/react-diff-view) がありますが、こちらは react-diff-viewer に関する記事になりますのでお間違いなきように。

## サンプルコード

[react-diff-viewer-sample](https://github.com/t0yohei/react-diff-viewer-sample)

## 環境情報

- yarn: 1.22.4
- react: 16.13.1
- react-diff-viewer: 3.1.1
`;

class Diff extends PureComponent {
  render = () => {
    return (
      <ReactDiffViewer
        oldValue={oldText}
        newValue={newText}
        splitView={false}
        disableWordDiff={true}
        hideLineNumbers={true}
        useDarkTheme={true}
      />
    );
  };
}

export default Diff;
