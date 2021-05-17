# 리액트 입문

기본적으로 back end 공부만 해오던 차에 나에게도 기본적인 javascript에 대한 지식이 필요해졌고 그리고 어떤 템플릿만 만들어두게 된다면 다양하게 사용할수 있고 front end의 기본이라 할수 있는 하지만 결코 만만하지 않은 내용인 react library에 대해 학습해보고 조금이나마 적용할수 있기 위해 정리하려 한다.


## 1. 리액트 필요성

HTML에서 각각의 DOM을 제어하고 구성을 하게 되면 JavaScript에서 querySelector와 getElementbySth 과 같은 문법을 자주 접하게 된다. 이들은 개발자들이 각각의 Node에 쉽게 접근할 수 있게 해주지만 너무 많은 Event들과 맞물려 제어를 하게 되면 굉장히 복잡한 구조를 맛(?)볼수 있다.

하지만 이러한 구조들은 일정한 패턴(?)을 보이게 되고 이러한 패턴에따라 JavaScript를 위한 그리고 그에 의한 Framework들이 만들어지고 활용되고 있다. Angular와 같은 Framework는  특정 DOM이 바뀌면 특정 DOM의 속성이 바뀌도록 연결을 해주어서, 업데이트 작업을 간소화 시켜주 었다.

하지만 React의 경우 조금 다른 사상아래 개발이 되었는데. 그것은 Virtual DOM이라고 하는 특이한 개념이다.

### `- Virtual DOM`


## 2.JSX

JSX가 Javascript로 제대로 변환이 되려면 필요한 몇가지 규칙이 있다.

**꼭 닫혀야한다**

기본 HTML의 문법과 비슷해보이지만 차이점이 있다.`<div></div>`과 같은 당연히 닫혀야 되는 태그들은 실수가 없겠지만 `<input>` 또는 `<br>` 태그를 사용할 때 닫지 않고 사용하면 안된다는 뜻이다.

**그러므로 항상 감싸져야한다.**

이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 수 있다. 스타일 관련 설정을 하다가 복잡해지는 상황이 올수 있기 때문에 *Fragment*를 사용하자

```html
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
```



<!-- Line -->
___

<!-- Text attributes -->
Builds the **app** for production to the `build` folder.\
It correctly bundles *React* in production mode and ~~optimizes~~ the build for the best performance.
<!-- Quote -->
>The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
<!-- Bullet list -->
목록만들기:
* 목록1
* 목록2

목록만들기2:
- 목
- 록

<!-- Link -->

Click [here](https://www.naver.com)

<!-- Image -->

![image description](https://img.freepik.com/free-vector/big-data-circular-grayscale-visualization-futuristic-infographic-information-aesthetic-design-visual-data-complexity-complex-data-threads-graphic-visualization-social-network-abstract-data-graph_1217-2125.jpg?size=338&ext=jpg&ga=GA1.2.1623233742.1618531200)

<!-- Table -->

| Col1 | Col2 | Col3|
|--:|:--|:--:|
|C1|C2|C3|
|C1|C2|C3|
|C1|C2|C3|
|C1|C2|C3|

<!--Code-->
To print message in the console, use `console.log('your message')` and ..


```js
console.log('come cmoe')
```









the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
