# Api Documentation

## Users Route (/users)

**/api/users/register {register as admin}**

```Javascript
// {Request body}
  {
    "name" : STRING *
    "email": STRING *
    "password" : STRING (Min 8 letters) *
  }

  // {{ Request Example }}

  {
	   "name": "John Doe",
     "email": "test1@email.com",
     "password": "password",
  }

  // {{ Response Success body }}
  {
    "id": "W5qqh7JdM2PkkKcXf",
    "name": "John Doe",
    "email": "text1@email.com",
    "updatedAt": "2019-04-23T12:47:00.741Z",
    "createdAt": "2019-04-23T12:47:00.741Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilc1cXFoN0pkTTJQa2tLY1hmIiwiaWF0IjoxNTU2MDIzNjIxLCJleHAiOjE1NTYwNTI0MjF9.YU_JRjb968nIJJICDje8P6T5jMQXcUDaCz_UCrA0Cok"
  }

  // {{ Response Body Failed }}

  {
    "error": {
        "code": 400,
        "message": "Email Should be unique and password should be 8 or more characters"
    }
  }

```

**/api/users/login { log admins in }**

```Javascript

  {
    "email": STRING *
    "password" : STRING *
  }


  // {{ Response Success body }}
  {
    "id": "mxdEsemuf4MKa8HwY",
    "name": "John Doe",
    "email": "text@email.com",
    "createdAt": "2019-04-23T13:03:15.381Z",
    "updatedAt": "2019-04-23T13:03:15.381Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im14ZEVzZW11ZjRNS2E4SHdZIiwiaWF0IjoxNTU2MDI0NjMyLCJleHAiOjE1NTYwNTM0MzJ9.YIW9ZZNOjcXB1kmMqeMyjxne8r0y4H5L1ZRGIF0ORFk"
  }

  // {{ Response Body Failed }}

  {
    "message": "User not found"
  }


```
**/api/users/:id { Get all events of a user }**

```Javascript
// {{ Response On Success}}
// {{ .events }} ==> All events of the user
// {{ .events.attendants }} ==> All Attendants of that particular event


{   id: 'p9NPt2MxmCZkQrnxu',
    name: 'name',
    email: 'test@email.com',
    createdAt: '2019-07-17T14:56:09.066Z',
    updatedAt: '2019-07-17T14:56:09.066Z',
    events:
     [ { id: 'mQSXJyvQTNXTtnuQR',
         createdBy: 'p9NPt2MxmCZkQrnxu',
         name: 'qweqweq',
         logoUrl: null,
         message: null,
         pluLink: null,
         createdAt: '2019-07-17T14:56:09.428Z',
         updatedAt: '2019-07-17T14:56:09.428Z',
         attendants: [...] } ] }

// {{ Response On Failed }}    
{ code: 404, message: 'User Not Found' }
```
