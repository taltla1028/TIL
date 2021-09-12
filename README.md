# FRONT TIL 08.29 START!! 😀

Writer: YaNuu



## HTML

1. 텍스트 요소

   #### 제목

   

   ##### h1~h6

   **HTML `<h1>`–`<h6>` 요소**는 6단계의 구획 제목을 나타냅니다. 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다.

   ```html
   
   <h1>제목1</h1>
   <h2>제목2</h2>
   <h3>제목3</h3>
   <h4>제목4</h4>
   <h5>제목5</h5>
   <h6>제목4</h6>
   
   ```

   #### 본문

   

   ##### p

   **HTML `<p>` 요소**는 하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다.

   ```html
   <!-- P -->
   <p>첫 번째 문단입니다.
     첫 번째 문단입니다.
     첫 번째 문단입니다.
     첫 번째 문단입니다.</p>
   <p>두 번째 문단입니다.
     두 번째 문단입니다.
     두 번째 문단입니다.
     두 번째 문단입니다.</p>
   ```

   ##### 줄 바꿈 요소

   **HTML `<br>` 요소**는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.

   ```html
   <p> O’er all the hilltops<br>
       Is quiet now,<br>
       In all the treetops<br>
       Hearest thou<br>
       Hardly a breath;<br>
       The birds are asleep in the trees:<br>
       Wait, soon like these<br>
       Thou too shalt rest.
   </p>
   ```

   ##### 인용 블럭 요소

   **HTML `<blockquote>` 요소**는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 주로 들여쓰기를 한 것으로 그려집니다.

   ```html
   <figure>
       <blockquote cite="https://www.huxley.net/bnw/four.html">
           <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
       </blockquote>
       <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
   </figure>
   ```

   

   ##### 인라인 인용문 요소

   **HTML `<q>`요소**는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현합니다. `<q>`는 **줄 바꿈이 없는 짧은 경우에 적합합니다.** 긴 인용문은 [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote) 요소를 사용하세요.

   ```html
   <p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>
   
   ```

   - [**`cite`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/q#attr-cite)

     인용문의 출처 문서나 메시지를 가리키는 URL. 인용문의 맥락 혹은 출처 정보를 가리킬 용도입니다.

     ##### pre

   **HTML `<pre>` 요소**는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다.

   ```html
   <figure role="img" aria-labelledby="cow-caption">
       <pre>
       _______________________
     < 나는 이 분야의 전문가다. >
       -----------------------
              \   ^__^
               \  (oo)\_______
                  (__)\       )\/\
                      ||----w |
                      ||     ||
       </pre>
       <figcaption id="cow-caption">
         소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을 적용한 텍스트로 그려져있습니다.
       </figcaption>
     </figure>
   ```

   ##### fiqure

   **HTML `<figure>` 요소**는 독립적인 콘텐츠를 표현합니다. [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption) 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다.


   보통 figure 는 문서 플로우가 참조되지만, 다른 부분이나 부록으로 이동해도 문제 없는 이미지.삽화,도표,코드 조각 등을 맡습니다.

   ```html
   <figure>
         <img src="/media/cc0-images/elephant-660-480.jpg"
              alt="Elephant at sunset">
         <figcaption>An elephant at sunset</figcaption>
     </figure>
   ```

   

   ##### figcaption

   **HTML `<figcaption>` 요소는** 부모 [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure) 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타냅니다.

   

   ##### hr

   **HTML `<hr>` 요소**는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다.

   ```html
   <p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>
   
   <hr>
   
   <p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
   ```

   ##### 특성

   [**`align`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr#attr-align) 

   줄의 정렬을 지정합니다. 기본값은 `left`입니다.

   [**`color`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr#attr-color) 

   색깔 이름 또는 16 진수의 값으로 줄의 색깔을 지정합니다.

   [**`noshade`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr#attr-noshade) 

   Sets the rule to have no shading.

   [**`size`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr#attr-size) 

   줄의 높이를 픽셀 단위로 지정합니다.

   [**`width`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr#attr-width) 

   줄의 가로 길이를 픽셀이나 퍼센트 값으로 지정합니다.

     ##### abbr

   **HTML `<abbr>` 요소**는 준말 또는 머리글자를 나타냅니다. 선택 속성인 [`title`](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes#attr-title)을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. `title` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다.	

    ```html
   <p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
    ```

   






   ##### address

   **HTML `<address>` 요소**는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다.

   ```html
    <p>나의 주소</p>
    
    <address>
    	<a href="yanuus9797@gmail.com"></a> </br>
    	<a href="tel:01012345677">010-1234-5678</a>
    </address>
   ```

   ##### 주의 사항

   연락처 외의 정보 를 담아서는 안됩니다.

   보통,현재 구획에 <footer> 요소가 존재하면 <address>를 그안에 배치할수있습니다.

   

   ##### cite

   **HTML `<cite>` 요소**는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.

   ```html
    <figure>
       <blockquote cite="Nineteen Eighty-Four">
           <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
       </blockquote>
       <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
   </figure>
   ```

   

   ##### 양방향 텍스트 재정의 요소

   **HTML `<bdo>` 요소**는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다.

   

   ###### 특성

   [**`dir`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/bdo#attr-dir)

   요소 콘텐츠의 텍스트 쓰기 방향. 가능한 값은 다음과 같습니다.

   - `ltr`: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냅니다.

   - `rtl`: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냅니다.

     

   ```html
   <!-- 쓰기 방향 바꾸기 -->
   <p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
   <p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
   ```

   

   #### 포메팅

   

   ##### b

   **HTML `<b>` 요소**는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다. 원래는 "굵은 글씨 요소"로 불렸으며, 대부분의 브라우저도 여전히 텍스트를 굵은 글씨체로 강조합니다. 그러나 `<b>`를 사용해 텍스트를 꾸미면 안됩니다. 

   ```html
   <p>The two most popular science courses offered by the school 
   are <b class="term">chemistry</b> (the study of chemicals and the composition of substances) and <b class="term">physics</b> (the study of the nature and properties of matter and energy).</p>
   ```

   

   ##### 높은 중요도 요소

   **HTML `<strong>` 요소**는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다.

   ```html
   <p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>never feed him after midnight</strong>.</p>
   ```

   ###### 예제

   ```html
   <!-- 기본 예제 -->
   <p>Before proceeding, <strong>make sure you put on your safety goggles</strong>.</p>
   
   <!-- 경고 표시 -->
   <p><strong>Important:</strong> Before proceeding, make sure you add plenty of butter.</p>
   ```

   

   ##### i

   **HTML `<i>` 요소**는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다.

   ```html
   HTML <i> 요소는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다.
   ```

   

   ##### 강세요소

   **HTML `<em>` 요소**는 텍스트의 강세를 나타냅니다. `<em>` 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다.

   ```html
   <p>Get out of bed <em>now</em>!</p>
   
   <p>We <em>had</em> to do something about it.</p>
   
   <p>This is <em>not</em> a drill!</p>
   
   ```

   

   ##### mark

   **HTML `<mark>` 요소**는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.

   ```html
   <p>Search results for "salamander":</p>
   
   <hr>
   
   <p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
   
   <p>Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and other small creatures.</p>
   ```

   

   ##### 덧붙임 글 요소

   **HTML `<small>`** **요소**는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다. 기본 상태에서 `<small>`은 자신의 콘텐츠를 한 사이즈 작은 글꼴(`small`에서 `x-small` 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없습니다.

   ```html
   <p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>
   
   <hr>
   
   <p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>
   ```

   

   ##### 아래 첨자 요소

   **HTML** **`<sub>`** 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 합니다.

   ```html
   <p>Almost every developer's favorite molecule is
   C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
   ```

   ###### 예제

   ```html
   <!-- 각주 표기 -->
   
   <p>According to the computations by Nakamura, Johnson, and
   Mason<sub>1</sub> this will result in the complete annihilation
   of both particles.</p>
   
   <!-- 변수표기 -->
   
   <p>The horizontal coordinates' positions along the X-axis are
   represented as <var>x<sub>1</sub></var> ... <var>x<sub>n</sub></var>.</p>
   
   <!--화학식-->
   <p>Almost every developer's favorite molecule is
   C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, which is
   commonly known as "caffeine."</p>
   
   ```

   

   ##### 위첨자 요소

   **HTML** **`<sup>`** 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다. 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 합니다.

   ```html
   <p>The <b>Pythagorean theorem</b> is often expressed as the following equation:</p>
   
   <p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
   ```

   

   ###### 예제

   ```html
   <!-- 지수표기 -->
   
   <p>One of the most common equations in all of physics is
   <var>E</var>=<var>m</var><var>c</var><sup>2</sup>.<p>
   
   <!-- 서수표기 -->
   <p>The ordinal number "fifth" can be abbreviated in various
   languages as follows:</p>
   <ul>
     <li>English: 5<sup>th</sup></li>
     <li>French: 5<sup>ème</sup></li>
   </ul>
   ```

   

   ##### del

   **HTML `<del>` 요소**는 문서에서 제거된 텍스트의 범위를 나타냅니다. 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins) 요소를 추가된 텍스트의 범위를 나타낼 수 있습니다.

   ##### ins

   **HTML `<ins>` 요소**는 문서에 추가된 텍스트의 범위를 나타냅니다. [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/del) 요소를 사용하면 삭제된 텍스트의 범위를 나타낼 수 있습니다.

   ```html
   <p>“You're late!”</p>
   <del>
       <p>“I apologize for the delay.”</p>
   </del>
   <ins cite="../howtobeawizard.html" datetime="2018-05">
       <p>“A wizard is never late …”</p>
   </ins>
   
   ```

   

   ##### 인라인 코드요소

   **HTML `<code>` 요소**는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다. 기본 스타일은 [사용자 에이전트](https://developer.mozilla.org/ko/docs/Glossary/User_agent)의 고정폭 글씨체입니다.

   ```html
   <p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>
   
   ```

   ###### 참고

   여러줄의 코드를 나타내려면 <code> 요소를 <pre> 로 감싸세요. 보통 상황에서는 <code>는 코드 한줄만 나타냅니다.


   ##### 키보드 입력요소

   **HTML `<kbd>` 요소**는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다. 관례에 따라 [사용자 에이전트](https://developer.mozilla.org/ko/docs/Glossary/User_agent)의 고정폭 글꼴로 표시하지만, HTML 표준은 그런 점을 강제하지 않습니다.

   ```html
   <p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
   ```

   

   #### 링크

   

   ##### a

   **HTML `<a>` 요소**(앵커 요소)는 [`href`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-href) 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. `<a>` 안의 콘텐츠는 링크 목적지의 설명을 **나타내야 합니다**.

   ###### 특성

   [**`download`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-download)

   링크로 이동하는 대신 사용자에게 URL을 저장할지 물어봅니다. 값을 지정할 수도 있고, 지정하지 않을 수도 있습니다.

   [**`href`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-href)

   하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있습니다.

   [**`hreflang`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-hreflang)

   링크 URL의 인간 언어에 대한 힌트. 특별한 내장 기능은 없습니다. 가능한 값은 [전역 `lang` 특성](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/lang)과 동일합니다.

   [**`ping`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-ping)

   하나의 스페이스로 구분하는 URL 목록. 링크를 클릭해 따라갈 경우, 브라우저가 URL 각각에 [`POST`](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/POST) 요청을 전송합니다. 대개 추적 용도로 사용합니다.

   [**`referrerpolicy`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-referrerpolicy) 

   URL을 가져올 때 사용할 리퍼러. [Referrer-Policy (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) 문서에서 가능한 값과 효과를 확인하세요.

   [**`rel`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-rel)

   하나의 스페이스로 구분하는, 연결한 URL과의 관계를 나타내는 [링크 유형](https://developer.mozilla.org/ko/docs/Web/HTML/Link_types) 목록.

   

   [**`target`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-target)

   링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, `<iframe>`의 이름이나 특정 키워드입니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.

   - `_self`: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
   - `_blank`: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
   - `_parent`: URL을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.
   - `_top`: URL을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.

   

   [**`type`**](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-type)

   링크 URL의 [MIME type](https://developer.mozilla.org/ko/docs/Glossary/MIME_type)에 대한 힌트. 특별한 내장 기능은 없습니다.

   

   ###### 예제

   ```html
   <!-- 절대 경로 -->
   
   <a href="https://www.naver.com"> 네이버 </a>
   
   <!-- 상대경로 -->
   <a href="./myfolder/folder/test.html">웹페이지</a>
   
   <!-- 같은 페이지의 요소로 연결 -->
   <a href="#hello">hello 로 이동 </a>
   
   <!-- 링크가 향할 제목 -->
   
   <h2 id="hello">
     안녕하세요
   </h2>
   
   <!-- 이메일 주소로 연결 -->
   <a href="mailto:yanuus9797@gmail.com">메일 보내기</a>
   
   <!-- 전화번호로 연결 -->
   <a href="tel:01012345678">call me</a>
   ```

   

   ##### Entity

| 특수문자 | Entity |
| :------: | :----: |
| <       | &lt ; |
| >        | &gt ; |
| "        | &quot ; |
| '        | &apos ; |
| &        | &amp ; |

더많은 Entity 를 알고싶을때는 
https://dev.w3.org/html5/html-author/charref

2. 구조를 나타내는 요소

   #### 시멘틱 웹 이란

   '의미론적 웹' 이라는 뜻으로 현재의 인터넷과 같은 분산환경에서 리소스 에 대한 정보 와 지원 사이에 관계-의미 정보 를 기계가 처리할 수 있는 온톨로지 형태로 표현하고, 이를 자동화된 기계가 처리하도록 하는 프레임워크 이자 기술이라고 한다.

   

   창시자는 팀 버너스리 1998년 에 제안했고 현재 W3C에 의해 표준화 작업 중이다.

   

   #### HTML5에서의 시멘틱 웹

   html5에서의 시멘틱 웹을 쉽게 구성할수 있도록 만들어주는 요소들이 추가되었는데 

   

   ###### 기존

   ```html
   <div id="header"> 내용 </div>
   ```

   

   ###### HTML5 시멘틱 웹

   ```html
   <header> 내용 </header>
   ```


   의미론적으로 나타낼수 있게 되었다. 이는 div=header 모두 읽었던 예전 XHTML이나 HTML4보다 훨씬 효율적이라고 할수있따

   #### 시멘틱 웹의 개념

   웹 기술은 정보표현과 전달에 간편한 방법을 제공하여 인터넷이 실생활까지 확산되는 기폭제 역할을 하였다. 그러나, 웹상에 축적된 정보가 방대해 짐에 따라 많은 문제에 봉착하게 되었다. 웹 기술은 축적된 방대한 데이터에 대하여 키워드(keyword)에 의한 정보 접근만을 허용하고 있어, 정보 검색시 무수히 많은 불필요한 정보가 돌출하여 정보 홍수를 가중시키고 있다. 또한, 컴퓨터가 필요한 정보를 추출, 해석, 가공할 수 있는 방법이 없어, 모든 정보를 사용자가 직접 개입해서 처리하여야 하는 문제가 있다. 이러한 문제들의 근본원인은 컴퓨터가 정보자원의 의미를 이해하지 못하는데 원인이 있다. 이러한 웹 기술은 팀 버너스리가 초창기에 구상하였던 웹과도 거리가 있다.

   2001년 팀 버너스리등에 의해 웹 기술의 비전으로 시맨틱 웹이 제시되었다. 시맨틱 웹은 기존 웹을 확장하여 컴퓨터가 이해할 수 있는 잘 정의된 의미를 기반으로 의미적 상호운용성(semantic interoperability)을 실현하여, 다양한 정보자원의 처리 자동화, 데이터의 통합 및 재사용등을 컴퓨터가 스스로 수행하여, 인간과 컴퓨터 모두 잘 이해할수 있는 웹을 만드는 것이 목표이다.

   

   ##### header

   **HTML `<header>` 요소**는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.

   

   ###### 예제

   ```html
   <!-- 페이지 제목 -->
   <header>
     <h1>Main Page Title</h1>
     <img src="mdn-logo-sm.png" alt="MDN logo">
   </header>
   
   <!-- 글제목 -->
   <article>
     <header>
       <h2>The Planet Earth</h2>
       <p>Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith</p>
     </header>
     <p>We live on a planet that's blue and green, with so many things still unseen.</p>
     <p><a href="https://janesmith.com/the-planet-earth/">Continue reading....</a></p>
   </article>
   
   ```

   

   ##### footer

   **HTML `<footer>` 요소**는 가장 가까운 [구획 콘텐츠](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)나 [구획 루트](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.

   ###### 예제

   ```html
   <footer>
     Some copyright info or perhaps some author
     info for an &lt;article&gt;?
   </footer>
   ```

   

   ##### nav

   **HTML `<nav>` 요소**는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.

   ###### 예제

   ```html
   <nav>
     <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
   </nav>
   ```

   

   ##### aside

   **HTML `<aside>` 요소**는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.

   

   ###### 예제

   ```html
   <!-- 다음 예제는 글 내의 문단을 <aside>로 표시합니다. 해당 문단은 글의 주제와 간접적으로만 연결되어 있습니다. -->
   <article>
     <p>
       디즈니 만화영화 <em>인어 공주</em>는
       1989년 처음 개봉했습니다.
     </p>
     <aside>
       인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.
     </aside>
     <p>
       영화에 대한 정보...
     </p>
   </article>
   ```

   

   ##### main

   **HTML `<main>` 요소**는 문서 [`body`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/body)의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.

   ###### 예제

   ```html
   <!-- other content -->
   
   <main>
     <h1>Apples</h1>
     <p>The apple is the pomaceous fruit of the apple tree.</p>
   
     <article>
       <h2>Red Delicious</h2>
       <p>These bright red apples are the most common found in many
       supermarkets.</p>
       <p>... </p>
       <p>... </p>
     </article>
   
     <article>
       <h2>Granny Smith</h2>
       <p>These juicy, green apples make a great filling for
       apple pies.</p>
       <p>... </p>
       <p>... </p>
     </article>
   
   </main>
   
   <!-- other content -->
   ```

   

   ##### article

   **HTML `<article>` 요소**는 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다.

   ###### 예제

   ```html
   <article class="film_review">
     <header>
       <h2>Jurassic Park</h2>
     </header>
     <section class="main_review">
       <p>Dinos were great!</p>
     </section>
     <section class="user_reviews">
       <article class="user_review">
         <p>Way too scary for me.</p>
         <footer>
           <p>
             Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
           </p>
         </footer>
       </article>
       <article class="user_review">
         <p>I agree, dinos are my favorite.</p>
         <footer>
           <p>
             Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.
           </p>
         </footer>
       </article>
     </section>
     <footer>
       <p>
         Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.
       </p>
     </footer>
   </article>
   ```

   

   ##### Section

   **HTML `<section>` 요소**는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 `<section>`은 제목을 포함하지만, 항상 그런 것은 아닙니다.

   - 각각의 `<section>`을 식별할 수단이 필요합니다. 주로 제목 <h1>~<h6> 요소를 `<section>`의 자식으로 포함하는 방법을 사용합니다.
   - 요소의 콘텐츠를 따로 구분해야 할 필요가 있으면 [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article) 요소를 고려하세요.
   - `<section>` 요소를 일반 컨테이너로 사용하지 마세요. 특히 단순한 스타일링이 목적이라면 [``](https://developer.mozilla.org/ko/docs/Web/HTML/Element/div) 요소를 사용해야 합니다. 대개, 문서 요약에 해당 구획이 논리적으로 나타나야 하면 `<section>`이 좋은 선택입니다.

   ###### 예제

   ```html
   <!-- 이전 -->
   <div>
     <h2>Heading</h2>
     <img>some image</img>
   </div>
   
   <!-- 이후 -->
   <section>
     <h2>Heading</h2>
     <img>some image</img>
   </section>
   ```

   

3. 목록과 표

4. 임베디드 요소

5. 폼 관련 요소

6. 메타데이터 요소

7. 전역 속성

   


