## Client blog site react 

![slingerblog](https://user-images.githubusercontent.com/71145865/187675534-c287376e-bc5f-4630-94a4-d8325a62f2b4.png)
## Description
React client that consumes from `api-blog-site-django` api,which is public in my repos. The client enable user to log in,sign up and perform crud functionality to blogs if they have `writter` permissions. If they don't have permissions,users can read  the created blogs,like and comment them. 
## installation
Go to https://github.com/kris-slinger api-blog-site-django and follow the steps.

when server is running,in a new terminal tab,do the following
```bash
> git clone https://github.com/kris-slinger/client-blog-site-react
> cd client-blog-site-react
> yarn install 
> yarn watch:css # to generate and watch tailwind output file
> yarn start
```
Enjoy the webapp!

## Technologies used
- react
- tailwindcss

## contribution
Pull requests are allowed.For major tweak,please open a pull request to discuss what you would like to change.

## license
[MIT](https://choosealicense.com/licenses/mit/)