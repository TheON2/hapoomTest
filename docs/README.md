# API 스프링 변환 예제

## 테이블

Mongoose와 같은 NoSQL 데이터베이스를 사용하면 스키마에 유연성을 가질 수 있지만, 관계형 데이터베이스인 MySQL을 사용하려면 테이블을 더 엄격하게 정의해야 합니다. 

위의 Mongoose 스키마를 MySQL 테이블로 변환하면 다음과 같습니다:

```sql
CREATE TABLE Comment (
    id VARCHAR(255) NOT NULL,
    recipeId VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    writerEmail VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
```

주의해야 할 것은, MySQL에서는 자동으로 생성되는 timestamp는 `created_at`과 `updated_at` 두 개의 컬럼을 사용하여 처리할 수 있습니다. 

또한, NoSQL 데이터베이스는 대소문자를 구별하지 않는 반면, SQL은 대소문자를 구별합니다. 따라서 모든 컬럼 이름은 소문자로 작성하는 것이 좋습니다. 

마지막으로, 이 SQL 쿼리는 Comment 테이블을 생성하는데, 실제 환경에서는 recipeId 컬럼에 대한 외래 키 제약조건을 추가해주는 것이 좋습니다. 하지만 이는 당신의 데이터베이스 구조에 따라 달라질 수 있습니다.
