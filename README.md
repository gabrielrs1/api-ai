# api-ai
Using IA with ollama and lhama (meta)

## Environment
Required docker

Install lhama in your computer using docker (https://hub.docker.com/r/ollama/ollama). OBS: Different installation for NVIDIA or AMD

Basic installation: (docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama). This method is generic.

For running your ai on docker execute (docker exec -it ollama ollama run llama3.2:3b)

I have a problem with docker about "the input device is not a TTY.  If you are using mintty, try prefixing the command with 'winpty'"
Solution -> winpty docker exec -it ollama ollama run llama3.2:3b

Create project using node with next to libraries: express and axios









IDEIA DE PROJETO:
A IA está rodando em background no PC. Neste momento tem um script que todo conteúdo selecionado pelo usuário, junto com uma combinação de teclas (ex: fn + ctrl + shift) ele cria uma tradução automática na tela (cria uma view a nível do cliente que fica por cima do texto selecionado).