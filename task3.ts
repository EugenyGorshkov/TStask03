// Напиши и типизируй функцию, выполняющую запрос за данными по переданному URL. Выведи их в консоль в формате: "ID: id, Email: email".
import fetch from "node-fetch";

interface Post {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async <T, R extends string>(url: R): Promise<T[]> => {
    const res = await fetch(url)

    if(!res.ok) {
      console.error('Error', res.status)
    }

    return await res.json()
}

getData<Post, string>(COMMENTS_URL)
  .then(data => {
    // Your code here...
    console.log(data.map(el => `ID: ${el.id}, Email: ${el.email}`))
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
