# JUST CLEAN TOWERS API

## Project Information

- DB Used MS-SQL
  - Tables created by Sequelize
    - towers
    - offices
    - users
  - Seeds inserted by Sequelize
    - Set values inside `config/config.json`
      - `npx sequelize-cli db:seed:all --config config\config.json --env production`
    - admin users by seed command
    - towers and offices by seed command

## Steps to run

- Set environment variables
  ```js
      {
          PORT: process.env.PORT || '3000',
          DB: {
              USER: process.env.DB_USER || 'justclean-test',
              NAME: process.env.DB_NAME || 'justclean',
              PASS: process.env.DB_PASS || '12345',
              HOST: process.env.DB_HOST || 'localhost',
          },
          NODE_ENV: process.env.NODE_ENV || 'test',
          JWT: {
              SECRET: process.env.JWT_SECRET || 'test',
              ISSUER: process.env.JWT_ISSUER || 'just-clean',
              EXPIRY: process.env.JWT_EXPIRY_TIME_IN_SEC || '4000',
          },
          REDIS: {
              HOST: process.env.REDIS_HOST || '192.168.99.100',
              PORT: process.env.REDIS_PORT || '6300',
          }
      }
  ```
- Set `NODE_ENV:'prod'` to enable DB.
- Start the project using `npm start`
- Run seeds command after starting the project
  - `npx sequelize-cli db:seed:all --config config\config.json --env production`
- Run test case using
  `npm run test:unit`

## API

#### POSTMAN collection `https://www.getpostman.com/collections/80186a6da68218bcff72`

- Routes
  - `/authenticate POST`
    - Purpose
      - Authenticate user and provide jwt
    - Request body
      ```json
      {
        "email": "test01@test.com",
        "password": "test01"
      }
      ```
    - Response body
      ```json
      {
        "xUser": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QwMUB0ZXN0LmNvbSIsInVzZXJJZCI6MSwibmFtZSI6InRlc3QiLCJleHAiOjE2MTA0NTEwNTgsImlhdCI6MTYxMDQ0NzA1OCwianRpIjoiMWJiZTI5YmItZTQ5OC00MDQ4LWI3ZjQtZDE4NjNmZjk1N2I1IiwiaXNzIjoianVzdC1jbGVhbiJ9.SzSYtjBG_1GeAyudBhP7wU1aer8n7Fsq5H5vXgfVRbI",
        "user": {
          "email": "test01@test.com",
          "userId": 1,
          "name": "test",
          "exp": 1610451058,
          "iat": 1610447058,
          "jti": "1bbe29bb-e498-4048-b7f4-d1863ff957b5",
          "iss": "just-clean"
        }
      }
      ```
  - `/towers (GET)`
    - Purpose
      - Filtering and pagination for towers list
    - Query params allowed for filtering data
      - limit=5
      - page_no=1
      - name=Arcadia
      - rating=5
      - sort=-name `- is used for descending and without - it will be ascending`
      - number_of_offices=5
      - number_of_floors=5
      - location=Delhi
    - Response
      - Status code 200
      - Body
      ```json
              {
                  "towers": [
                      {
                          "id": 1,
                          "name": "Arcadia",
                          "location": "Gurgaon",
                          "number_of_floors": 7,
                          "number_of_offices": 4,
                          "rating": 3,
                          "latitude": 78,
                          "longitude": 66,
                          "createdAt": "2021-01-12T09:40:20.405Z",
                          "updatedAt": "2021-01-12T09:40:20.406Z",
                          "offices": [
                              {
                                  "id": 1,
                                  "name": "bellurbis",
                                  "createdAt": "2021-01-12T09:42:51.800Z",
                                  "updatedAt": "2021-01-12T09:42:51.800Z",
                                  "towerId": 1
                              },
                              {
                                  "id": 2,
                                  "name": "solveda",
                                  "createdAt": "2021-01-12T09:42:51.800Z",
                                  "updatedAt": "2021-01-12T09:42:51.800Z",
                                  "towerId": 1
                              },
                              {
                                  "id": 3,
                                  "name": "suzuki",
                                  "createdAt": "2021-01-12T09:42:51.800Z",
                                  "updatedAt": "2021-01-12T09:42:51.800Z",
                                  "towerId": 1
                              },
                              {
                                  "id": 4,
                                  "name": "bellurbis-01",
                                  "createdAt": "2021-01-12T09:42:51.800Z",
                                  "updatedAt": "2021-01-12T09:42:51.800Z",
                                  "towerId": 1
                              }
                          ]
          }
      ```
  - `/towers (POST)`
    - Purpose
      - Create towers
    - Headers
      - authtoken
    - Request body
      ```json
      {
        "name": "02132122sdc12ad",
        "number_of_floors": 3,
        "location": "zxc3123",
        "longitude": 28.41808,
        "latitude": 77.05233
      }
      ```
  - `/towers/:id (POST)`
    - Purpose
      - Create offices in tower with id
    - Headers
      - authtoken
    - Request body
      ```json
      {
        "offices": [
          {
            "name": "b22l1l"
          }
        ]
      }
      ```
    - Response body
      ```json
      {
        "message": "offices created successfully",
        "body": [
          {
            "id": 1,
            "name": "b22l1l",
            "towerId": 1,
            "createdAt": "2021-01-11T18:16:03.678Z",
            "updatedAt": "2021-01-11T18:16:03.678Z"
          }
        ]
      }
      ```
  - `/towers/:id PUT`
    - Purpose
      - Update tower details
    - Headers
      - authtoken
    - Request body
      ```json
      {
        "name": "02132122sdc12ad",
        "number_of_floors": 3,
        "location": "zxc3123",
        "longitude": 28.41808,
        "latitude": 77.05233
      }
      ```
  - `/towers/:id DELETE`
    - Purpose
      - Delete the tower
