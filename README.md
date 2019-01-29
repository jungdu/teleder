This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TEREDER

### TEREDER 기능
다양한 언어로 이루어진 문장들을 등록하고 등록된 문장을 음성 파일로 변환하고 <br>
사용자가 들을 수 있도록 하는 인터페이스를 제공한다.

### 사용된 기술
 * AWS Polly : 문자열을 음성으로 변환하여 파일 형태로 변환시켜주는 서비스.
 * AWS S3 : Polly를 활용하여 만들어진 파일을 Client로 전송해주는 서비스.
 * AWS-SDK : NodeJS 에서 AWS 서비스를 활용하기 위한 라이브러리.
 * Express & GraphQL : Server API 를 통해 정보를 주고받기 위해 사용하는 Query Language.
 * React & Apollo : GraphQL 서버와 Client를 연동하기 위해서 Apollo 라이브러리를 사용.
 * MongoDB : 오픈소스 문서지향(Document-Oriented) 적 Cross-platform 데이터베이스.
 
### 사용 시나리오


### `npm run feed`
데이터 베이스에 초기 데이터들을 넣는다.

### `npm start`
GraphQL Express 서버 실행

### `npm run react`
React 실행

### `npm test`
Mocha를 활용한 서버 테스트를 실행

### `npm test`
React 테스트 실행

### `npm run build`
React 소스를 빌드

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
React를 커스터 마이징

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
