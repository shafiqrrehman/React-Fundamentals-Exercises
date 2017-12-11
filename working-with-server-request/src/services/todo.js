import axios from 'axios';

const url = 'https://requestb.in/y1puqly1';

export function CreateTodo(obj) {
    console.log(obj);
    return new Promise((resolve, reject) => {
        axios.post(url, obj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            })

    });
}

