# Simple reverse proxy

## Installation

`npm i [-g] reverse-proxy-starter [--save-dev]`

## Usage

```shell
reverse-proxy localhost http://127.0.0.1:3000 localhost/api http://127.0.0.1:8001 --port 8080
```

```shell
reverse-proxy {local-ip} http://{local-ip}:3000 {local-ip}/api http://{local-ip}:8001 --port 8080
```
