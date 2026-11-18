`GET /` retorna HTTP 200 e o texto `hello world`.

```sh
docker build -t hello-world-node .
docker run --rm -p 127.0.0.1:3000:3000 hello-world-node
```
O endpoint fica disponível no mesmo endereço. Se a porta 3000 já estiver em uso, troque a porta do host no comando por `127.0.0.1:8080:3000` e acesse [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

Após enviar o projeto a um repositório no GitHub, o workflow **CI** roda a cada push e pull request. Ele executa o teste HTTP, constrói a imagem Docker e confirma o retorno de `GET /` dentro do contêiner.
