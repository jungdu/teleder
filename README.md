# TEREDER

## TEREDER 기능
다양한 언어로 이루어진 문장들을 등록하고 등록된 문장을 음성 파일로 변환하여 <br>
사용자가 들을 수 있도록 하는 인터페이스를 제공합니다.   

## 사용된 기술
 * AWS Polly : 문자열을 음성으로 변환하여 파일 형태로 변환시켜주는 서비스.<br> 
 [AWS Polly 요금정책](https://aws.amazon.com/ko/polly/pricing/)
 * AWS S3 : Polly를 활용하여 만들어진 파일을 Client로 전송해주는 서비스.<br>
 [AWS S3 요금정책](https://aws.amazon.com/ko/s3/pricing/)
 * AWS-SDK : NodeJS 에서 AWS 서비스를 활용하기 위한 라이브러리.
 * Express & GraphQL : Server API 를 통해 정보를 주고받기 위해 사용하는 Query Language.
 * React & Apollo : GraphQL 서버와 React를 연동하기 위해서 Apollo 라이브러리를 사용.
 * MongoDB : 오픈소스 문서지향(Document-Oriented) 적 Cross-platform 데이터베이스.
 
## 실행 환경 구성 하기
* MongoDB 설치
* AWS 계정 생성
* AWS IAM USER 생성 ( S3 권한, Polly 권한 추가 )
* AWS-CLI 설치 후 생성한 IAM USER 등록 
* 음성파일을 저장할 AWS S3 버킷 생성
 
## 실행 방법
#### 1) dependency 설치 <br> `npm install`    
#### 2) MongoDB 실행 <br>    
#### 3) 데이터 넣기 <br> `npm run feed`    
#### 4) Express Server 실행 <br> `npm start`    
#### 5) React 실행 <br> `npm run react`    

## 사용 시나리오
#### 1) 성공적으로 서버 실행이 완료되면 아래와 같은 페이지를 보실 수 있습니다.
#### <br>아래에서 글 을 선택하시면 상세 페이지로 이동합니다.  
![default](https://user-images.githubusercontent.com/21999598/51917824-bd4e6e80-2423-11e9-97b3-562fdaa79ab5.PNG)
#### 2) 우측 상단의 Create를 클릭하시면 글 생성 페이지로 이동합니다.
#### <br> 우측 하단의 SUBMIT 버튼을 클릭하시면 글이 생성되고 리스트 페이지에서 확인하실 수 있습니다.
![4](https://user-images.githubusercontent.com/21999598/51972375-95601900-24be-11e9-8197-fff2c40cff52.PNG)
#### 3) 리스트 페이지에서 글 내용을 클릭하시면 상세 페이지로 이동합니다.<br> 
#### 상세 페이지에서 하단의 Voice 탭에서 목소리를 선택하시고 <br> 
#### 우측 하단에 보이는 초록색 Convert 버튼을 누르시면 해당 Content의 내용이 음성파일로 변환 됩니다.
![2](https://user-images.githubusercontent.com/21999598/51918324-ad835a00-2424-11e9-8bdd-badc97eb715d.PNG)
#### 4) 변환이 완료된 음성파일은 MP3 플레이어를 재생하여 해당 음성파일을 들으실 수 있습니다.<br>
#### Quote Info 우측의 빨간색 X원을 클릭 하여 MongoDB상의 데이터를 삭제하고 S3에 업로드된 파일 또한 삭제합니다.
![3](https://user-images.githubusercontent.com/21999598/51918711-5d58c780-2425-11e9-81b2-891eaa537c7e.PNG)


## 실행 명령어

### `npm run feed`
데이터 베이스에 초기 데이터들을 넣는다.

### `npm start`
GraphQL Express 서버 실행

### `npm run react`
React 실행

### `npm test`
Mocha를 활용한 서버 테스트를 실행

### `npm run react-test`
React 테스트 실행

### `npm run build`
React 소스를 빌드

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
