# 9월27일 알고리즘 TIL

### JavaScript란?

- 객체 기반의 스크립트 프로그래밍 언어
- ECMAScript 사양을 준수하는 범용 스크립팅 언어
- 자바와 직접적인 연관은 없으며, 웹의 동적 동작을 구현하기 위해 제작
- Mocha - LiveScript - JavaScript로 명칭 변경
- JavaScript는 JS 엔진위에서 수행되며,Google V8, Firefox SpiderMonkey, Edge Chakra 존재

### ECMAScript란?

- Ecma International이 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
- 자바스크립트를 표준화하기 위해 만들어졌으며, 액션스크립트와 J스크립트 등 다른 구현체도 포함
- Ecma International: 정보 통신에 대한 표준을 제정하는 비영리 표준화 기구
- ECMA-262: Ecma International에서 제정한 기술 규격의 이름으로, 범용 목적의 스크립트 언어 명세 기술
- 97년 ES1초판, 09년 ES5, 15년 ES2015(ES6)으로 매해 6월에 버전 갱신중 

#### ES5 의 특징
✨ 달라진점
use strict, 다양한 Array methods, Object property methodes, JSON methods 등의 도입!
- use strict()
- String.trim()
- Array.isArray()
- Array.forEach()
- Array.map()
- Array.filter()
- Array.reduce()
- Array.reduceRight()
- Array.every()
- Array.some()
- Array.indexOf()
- Array.lastIndexOf()
- JSON.parse()
- JSON.stringify()
- Data.Now()

#### ES6 의 특징
✨ let, const, Class, Arrow Functions, Promise(이 Promise 개정의 최신은 ES8의 async/await)의 도입!
- The let keyword
- The const keyword
- JavaScript Arrow Functions
- JavaScript Class
- JavaScript Promise
- JavaScript Symbol
- Default Parameter Values
- Function Rest Parameter
- Array.find()
- Array.findIndex()
- New Number Properties
- New Number Methods
- New Global Methods

### 입출력 상세 설명

표준입력 (stdin)
- 일반적으로 컴퓨터의 키보드의 응답을 받아 입력
- 프로그램의 데이터를 추가하기 위한 입력 장치
- 알고리즘에서는 문제의 Testcase 입력을 위해 사용

표준 출력 (stdout)
- 일반적으로 컴퓨터의 모니터에 문자열로 출력
- 프로그램의 실행 상태 혹은 실행 결과를 보고 판단
- 알고리즘에서는 문제의 정답 확인, 디버깅 용으로 사용


#### 코드구성

- JavaScript는 문법의 대부분을 C,C++,Java로부터 차용하여 제작된 스크립트 기반의 언어
- 다수의 표현식 으로 하나의 명령문 이 만들어지며, 명령문으로 프로그램이 수행
- 하나의 명령문 끝은 개행 문자 혹은 세미콜론 으로 표시 



##### 표현식(expression)

안녕 "하세요" let

##### 명령문(statement)

let 안녕 = "하세요";

##### 응용 프로그램(application)

let 안녕 = " 하세요 "

Let hi = "hello";



#### 키워드

 자바스크립트에서 문법을 만들때 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어



#### 식별자

- 스크립트에서 변수나 함수에 이름을 붙일때 사용하는 단어
- 대소문자를 구별하며 유니코드 문자셋을 이용
- 자바스크립트 내 식별자 규칙
  - 키워드 사용 불가
  - 숫자로 시작 불가
  - 특수문자는_와 $만 허용
  - 공백 문자 포함 불가 

| 식별자 사용 가능 단어 | 식별자 사용 불가 단어 |
| :-------------------: | :-------------------: |
|         algo          |          for          |
|        algo123        |         void          |
|         _algo         |        123algo        |
|         $algo         |         al go         |

##### 주석

- 프로그램 구현 시 개발자의 설명및 이해를 쉽게 도와주는 문장으로 실제 실행 코드에는 포함 x
- 주석의 종류는 단일행 주석 // 다중 행 주석 /* */ 존재



#### 변수

- 변경 가능한 값을 저장하기 위한 기억공간(memory)
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 let



##### 상수

- 변경 불가능한 값을 저장하기 위한 기억공간
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 const



##### 호이스팅

- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
- var의 변수/함수의 선언만 위로 올려지고,할당은 올려지지 않음
- Let/const 변수 선언과 함수 표현식에서는 호이스팅 발생하지 않음




#### 자료형

##### 자료형의 종류

- 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는 데이터의 종류
- 자바스크립트에서는 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성

|   구분   | 데이터타입 |                     설명                      |
| :------: | :--------: | :-------------------------------------------: |
| 원시타입 |  Boolean   |           논리적 값으로 true, false           |
|          |    Null    |    존재하지 않거나 유효하지 않은 주소 표시    |
|          | Undefined  |        선언 후 값을 할당하지 않는 변수        |
|          |   Number   |   정수,실수 등의 숫자,정수의 한계는 2의53승   |
|          |   String   |    빈 문자열이나 글자들을 표현하는 문자열     |
|          |   Symbol   | 문자열과 함께 객체 property로 사용,ES6에 추가 |
| 객체타입 |   Object   |       두개 이상의 복잡한 개체 저장 가능       |

##### Typeof

- typeof는 인수의 자료형을 반환하는 연산자
- 연산자인 typeof x와 함수은 typeof(x)로 문법 지원

###### boolean

- boolean은 논리적인 값을 표현하는 자료형
- 참인 true와 거짓인 false, 두가지 값만 존재
- 주로 조건문 등에서 동작 판단의 기준으로 사용

###### null

- null은 값이 비어 있다는 의미로 표현되는 자료형
- 존재하지 않는(nothing),비어있는(empty),알수없는(unknown)값을 나타내는데 사용

###### undefined

- undefined는 값이 할당되어 있지 않는 상태를 나타날 때 사용되는 자료형
- 변수 선언 후 초기화 하지 않는다면,undefined가 자동으로 할당

###### number

- Number(숫자형)은 정수,부동소수점(floating point)숫자를 표현하는 자료형
- number와 관련된 연산은 사칙연산(+,-,*,/)가 대표적
- number에는 일반적인 숫자 외에 Infinity, -Infinity,NaN(NOT a Number)같은 특수 숫자 값이 포함
- number에서는 $$2^53^$$-1보다 큰 값을 사용할수 없으며, 더 큰 정수를 다루고 싶다면 bigint 자료형 사용 필요

###### String

- string은 문자,문자열을 표현하는 자료형

- 자바스크립트에서 문자열은 3가지 종류의 따옴표로 표현 가능
  - 큰 따옴표:"hello"
  - 작은 따옴표:'hello'
  - 역 따옴표(백틱,backtick):`Hello`




