# JS Mini Shopping Mall

### defer

- `<script src="main.js" defer></script>`를 body태그 가장 끝단이 아닌 head안에서 사용하기 위해 defer속성을 정의해줬다.
- defer속성은 HTML을 로드하면서 백그라운드에서 자바스크립트 파일을 다운로드받고, HTML로드가 끝나면 바로 자바스크립트를 실행시켜준다.
- 하지만 일부 브라우저에서는 defer속성을 지원하지 않음으로 주의해야한다.
- 비슷한 속성으로는 async도 있다.

```html
// index.html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <script src="main.js" defer></script>
  <title>Mini Shopping Mall</title>
</head>
```

### :root

- 자주 쓰는 스타일들을 따로 :root안에 정의한 후, 아래에서 호출해서 사용했다.
- 아래와 같은 방법을 사용하게 되면, 스타일을 일관되게 주기 좋고, 나중에 관리하기가 편해진다.

```css
// style.css
:root {
  /* color */
  --color-black: #3f454d;
  --color-white: #ffffff;
  --color-blue: #3b88c3;
  --color-yellow: #fbbe28;
  --color-pink: #fd7f84;
  --color-light-grey: #dfdfdf;

  /* size */
  --base-space: 10px;
  --size-button: 60px;
  --size-border-radius: 5px;
  --size-button-padding: 12px 20px;
  --size-thumbnail: 60px;
  --font-size: 18px;

  /* animation */
  --animation-duration: 300ms;
}

.imgBtn {
  width: var(--size-button);
  height: var(--size-button);
}
.colorBtn {
  font-size: var(--font-size);
}
.blue {
  background-color: var(--color-blue);
}
.yellow {
  background-color: var(--color-yellow);
}
.pink {
  background-color: var(--color-pink);
}
```

### data-\*

- data-\*는 사용자 지정 데이터 특성(custom data attributes)이라는 특성 클래스를 지정해서, 임의의 데이터를 스크립트로 HTML과 DOM사이에 교환할 수 있다.
- data-key와 data-value로 지정한 이 커스텀 데이터 속성 값들은 버튼을 클릭했을 때, event.target안에 dataset에서 가져올 수 있다.

```html
<button class="btn colorBtn blue" data-key="button" data-value="blue">Blue</button>
<button class="btn colorBtn yellow" data-key="button" data-value="yellow">Yellow</button>
<button class="btn colorBtn pink" data-key="button" data-value="pink">Pink</button>
```
