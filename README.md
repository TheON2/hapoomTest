# Dev && Recipe 테스트용 목업서버

# API 문서

## 엔드포인트

### `GET /api/recipe`
모든 레시피를 가져옵니다.

**응답**

- 성공 시 `200 OK`

```json
[
  {
    "id": String,
    "subtitle": String,
    "category": String,
    "title": String,
    "ingredient": String,
    "tip": String,
    "url": String,
    "writerEmail": String
  }
]
```

### `GET /api/recipe/:recipeId`
주어진 레시피 id에 해당하는 레시피를 가져옵니다.

**매개변수**

- `recipeId`: 레시피의 ID

**응답**

- 성공 시 `200 OK`
- 주어진 id에 해당하는 레시피가 없을 경우 `404 Not Found`

```json
{
  "id": String,
  "subtitle": String,
  "category": String,
  "title": String,
  "ingredient": String,
  "tip": String,
  "url": String,
  "writerEmail": String
}
```

### `POST /api/recipe`
새로운 레시피를 생성합니다.

**매개변수**

- `image`: 레시피의 이미지
- `id`: 레시피의 ID
- `subtitle`: 레시피의 부제목
- `category`: 레시피의 카테고리
- `title`: 레시피의 제목
- `ingredients`: 레시피의 재료
- `tip`: 레시피의 팁
- `url`: 레시피의 URL
- `writerEmail`: 작성자의 이메일

**응답**

- 성공 시 `200 OK`
- 레시피 생성 중 문제 발생 시 `500 Internal Server Error`

### `PUT /api/recipe/:id`
기존 레시피를 업데이트합니다.

**매개변수**

- `id`: 레시피의 ID
- `image`: 레시피의 이미지
- `subtitle`: 레시피의 부제목
- `category`: 레시피의 카테고리
- `title`: 레시피의 제목
- `ingredients`: 레시피의 재료
- `tip`: 레시피의 팁
- `url`: 레시피의 URL
- `writerEmail`: 작성자의 이메일

**응답**

- 성공 시 `200 OK`와 함께 업데이트된 레시피 정보 반환
- 레시피 업데이트 중 문제 발생 시 `500 Internal Server Error`

죄송합니다, 계속 작성하겠습니다.

### `DELETE /api/recipe/:recipeId`
주어진 레시피 ID에 해당하는 레시피를 삭제합니다.

**매개변수**

- `recipeId`: 삭제할 레시피의 ID

**응답**

- 성공 시 `200 OK`와 함께 삭제 성공 메시지 반환
- 레시피를 찾지 못했을 경우 `404 Not Found`
- 레시피 삭제 중 문제 발생 시 `500 Internal Server Error`

### `GET /api/recipe/comments/:recipeId`
특정 레시피에 대한 모든 댓글을 가져옵니다.

**매개변수**

- `recipeId`: 댓글을 조회할 레시피의 ID

**응답**

- 성공 시 `200 OK`
- 댓글 조회 중 문제 발생 시 `500 Internal Server Error`

### `POST /api/recipe/comment`
새로운 댓글을 생성합니다.

**매개변수**

- `image`: 댓글의 이미지
- `commentId`: 댓글의 ID
- `recipeId`: 댓글이 작성될 레시피의 ID
- `comment`: 댓글 내용
- `writerEmail`: 댓글 작성자의 이메일

**응답**

- 성공 시 `201 Created`
- 댓글 생성 중 문제 발생 시 `400 Bad Request`

### `DELETE /api/recipe/comment/:commentId`
특정 댓글을 삭제합니다.

**매개변수**

- `commentId`: 삭제할 댓글의 ID

**응답**

- 성공 시 `200 OK`
- 댓글 삭제 중 문제 발생 시 `500 Internal Server Error`

### `GET /api/recipe/contents/:recipeId`
특정 레시피의 모든 컨텐츠를 가져옵니다.

**매개변수**

- `recipeId`: 컨텐츠를 조회할 레시피의 ID

**응답**

- 성공 시 `200 OK`
- 컨텐츠 조회 중 문제 발생 시 `500 Internal Server Error`
