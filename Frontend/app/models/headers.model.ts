// Definimos la interfaz de los headers
interface Headers {
    append(name: string, value: string): void;
}

const myHeaders = new Headers();
myHeaders.append("apikey", "jtKKhkULxhze5k3XQYg79yRxW8nr9P5b");

interface RequestOptions {
    method: string;
    redirect: RequestRedirect;
    headers: Headers;
}

const requestOptions: RequestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};