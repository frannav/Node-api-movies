# Nodejs API movies using Express

Can Get, GetOne, Create, Update and Delete movies in JSON format

# Docker

- Create image:
```sh
docker build -t movies-api . 
```

- Run image:
```sh
docker run -p 3000:3000 -d movies-api
```

# Scripts:

- Development:
```sh
npm run dev
```

- Production:
```sh
npm run start
```

- Test:
```sh
npm run test
```

```sh
npm run cover
```

- Report test:
```sh
npm run report
```

# Stack

- Express
- HTTP-friendly error objects: @hapi/boom 
- Data Validation: @hapi/joi 
- Testing: Mocha
