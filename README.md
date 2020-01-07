# Backend

## API Documentation

### Dummy Data Users

```
Users: [
  {
    "id": 1,
    "username": "user1",
    "password": "password",
    "name": "Yoshi",
    "city": "Los Angeles",
    "email: "yoshi@email.com"
  },
  {
    "id": 2,
    "username": "user2",
    "password": "password",
    "name": "Luigi",
    "city": "Irvine",
    "email: "luigi@email.com"
  },
  {
    "id": 3,
    "username": "user3",
    "password": "password",
    "name": "Koopa",
    "city": "Santa Monica,
    "email': "koopa@email.com"
  }
]
```

### Dummy Data Restaurants

```
[
  {
    "id": 1,
    "name": "Crossroads",
    "city": "Los Angeles",
    "zipcode": "1234",
    "phone_number": "123-456-7890",
    "website": "www.restaurant.com",
    "rating": 5,
    "notes": "I like it",
    "stamped": 1,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "Gracias Madre",
    "city": "Los Angeles",
    "zipcode": "1234",
    "phone_number": "123-456-7890",
    "website": "www.restaurant.com",
    "rating": 2,
    "notes": "Over rated",
    "stamped": 1,
    "user_id": 1
  },
  {
    "id": 3,
    "name": "Muchies",
    "city": "Santa Ana",
    "zipcode": "1234",
    "phone_number": "123-456-7890",
    "website": "www.restaurant.com",
    "rating": null,
    "notes": "Annoying social media",
    "stamped": 0,
    "user_id": 1
  },
  {
    "id": 4,
    "name": "Native",
    "city": "Costa Mesa",
    "zipcode": "1234",
    "phone_number": "123-456-7890",
    "website": "www.restaurant.com",
    "rating": 4,
    "notes": "I like it",
    "stamped": 1,
    "user_id": 2
  }
]
```

# Auth Routes

| Table | Method |       Endpoint |                      Description |
| ----- | :----: | -------------: | -------------------------------: |
| users |  POST  | /auth/register |            Registers a new user. |
| users |  POST  |    /auth/login | Logs in already registered user. |

## Register

### Registers a new user.

_Method URL:_ `/auth/register`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |  Type  | Required |    Description |
| ---------- | :----: | -------: | -------------: |
| `username` | String |      Yes | Must be unique |
| `password` | String |      Yes |                |
| `name`     | String |      Yes |                |
| `city`     | String |      Yes |                |
| `email`    | String |      Yes | Must be unique |

#### Examples

```
{
  "username": "user1",
  "password": "password",
  "name": "John",
  "city": "Chicago",
  "email": "user1@email.com"
}

```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If registration information is invalid, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in an already registered user.

_Method URL:_ `/auth/login`

_HTTP Method:_ **[POST]**

#### Request Body

| Name       |  Type  |                                                Description |
| ---------- | :----: | ---------------------------------------------------------: |
| `username` | String |                           Must match username in database. |
| `password` | String | Must match password to corresponding username in database. |

#### Example

```
{
  "username": "user1",
  "password": "password"
}
```

#### Response

##### 200 (OK)

> If you successfully log in, the endpoint will return an HTTP response with a status code `200`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# User Routes

### Gets list of all users.

_Method URL:_ `api/users`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users are not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Gets user by ID.

_Method URL:_ `api/users/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users with id is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users with id is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Deletes user by id.

_Method URL:_ `api/users/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If user with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If user with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Gets user passpor by user ID.

_Method URL:_ `api/users/:id/passport`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If users with id is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If users with id is not found, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

# Restaurant Routes

### Gets a list of restaurants.

_Method URL:_ `api/restaurants`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If restaurants are found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If restaurants are not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Gets restaurants by ID.

_Method URL:_ `api/restaurants/:id`

_HTTP Method:_ **[GET]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If restaurant with specified ID is found, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If restaurant with specified ID is not found, the endpoint will return an HTTP response with a status code `404`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Updates restaurant by ID.

_Method URL:_ `api/restaurant/:id`

_HTTP Method:_ **[PUT]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Body

| Name           |  Type   | Required | Description |
| -------------- | :-----: | -------: | ----------: |
| `name`         | String  |      Yes |             |
| `city`         | String  |      Yes |             |
| `zipcode`      | String  |      Yes |             |
| `phone_number` | String  |      Yes |             |
| `website`      | String  |       NO |             |
| `rating`       | Integer |       NO |             |
| `Notes`        | String  |       NO |             |
| `stamped`      | Integer |       NO |             |
| `user_id`      | Integer |       NO |             |

#### Example

```

{
    "name": "Crossroads",
    "city": "Los Angeles",
    "zipcode": "1234",
    "phone_number": "123-456-7890",
    "website": "www.restaurant.com",
    "rating": 5,
    "notes": "I like it",
    "stamped": 1,
    "user_id": 1
}

```

#### Response

##### 200 (OK)

> If restaurant with specified ID is found and updated, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If restaurant with specified ID is not found and updated, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

### Deletes restaurant by ID.

_Method URL:_ `api/restaurants/:id`

_HTTP Method:_ **[DELETE]**

#### Headers

| Name            |  Type  | Required |              Description |
| --------------- | :----: | -------: | -----------------------: |
| `Content-Type`  | String |      Yes | Must be application/JSON |
| `Authorization` | String |      Yes |           JSON Web Token |

#### Response

##### 200 (OK)

> If restaurant with specified ID is found and deleted, the endpoint will return an HTTP response with a status code `200`.

##### 404 (Not Found)

> If restaurant with specified ID is not found and deleted, the endpoint will return an HTTP response with a status code `404`.

##### 401 (Unauthorized)

> If user does not have access, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

```

```
