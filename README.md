# enigma
Simulador da ENIGMA, com palavra chave

No link abaixo, deixo uma aplicação que funciona de forma parecida com a **Máquina de Criptografia Enigma**

[Simuladdor ENIGMA](https://enigma-livid-tau.vercel.app/) - (Ctrl ou Cmd + CLIQUE para abrir em outra aba)

Na aplicação você deve fornecer uma palavra aleatória como chave e depois digitar sua mensagem.
Quando terminar, clique em "Criptografdar".

A pessoa para quem você enviar a mensagem criptografada, precisa saber a palavra chave, para poder descriptografar.

![image](https://github.com/user-attachments/assets/1da83721-1f6e-4e3a-bef8-95d043c485d2)

![image](https://github.com/user-attachments/assets/56596301-9a7d-4789-a6b5-6108290d13ec)

![image](https://github.com/user-attachments/assets/dfe0af69-74e5-4296-9708-cbcd29c3f4fd)

Se a pessoa que receber a mensagem não souber a palavra chave ou usar qualquer outra palavra, a mensagem não será descritografa.

![image](https://github.com/user-attachments/assets/724e3f1f-acce-436e-bde3-2faec4be37f3)


# Máquina de Criptografia Enigma

A máquina de criptografia **Enigma** foi usada pela Alemanha durante a Segunda Guerra Mundial para proteger comunicações militares. Ela funcionava através de um sistema eletromecânico baseado em rotores, que criava uma cifra altamente complexa. Aqui está um resumo de como o sistema funcionava:

## Estrutura da Máquina Enigma

1. **Teclado**: Entrada de mensagens.
2. **Rotores (ou discos)**: Componentes principais da criptografia, cada um girava após uma tecla ser pressionada, alterando a substituição de letras.
3. **Refletor**: Redirecionava o sinal elétrico, garantindo que a substituição fosse reversível (a mesma configuração podia ser usada para descriptografar).
4. **Plugboard (Steckerbrett)**: Um painel de conectores que permitia trocas adicionais de letras antes e depois dos rotores.
5. **Lâmpadas**: Indicavam a letra criptografada após o sinal passar pelos componentes internos.

---

## Funcionamento Básico

1. Cada tecla pressionada enviava um sinal elétrico.
2. O sinal passava pelos rotores, que substituíam a letra inicial por outra, dependendo da configuração dos rotores.
3. Após atravessar o refletor, o sinal voltava pelos mesmos rotores, mas seguia um caminho diferente devido à posição alterada dos rotores.
4. O plugboard realizava uma substituição adicional de letras antes de iluminar a lâmpada correspondente à letra cifrada.

---

## Chave de Configuração

A segurança do código dependia de:

- **A ordem dos rotores**: Existiam vários rotores, e a sequência escolhida era parte da chave.
- **A posição inicial dos rotores**: Cada rotor tinha 26 posições (uma para cada letra do alfabeto).
- **As conexões no plugboard**: Até 10 pares de letras podiam ser trocados.

A configuração era mudada diariamente e compartilhada entre os operadores para garantir que as mensagens pudessem ser decifradas corretamente.

---

## Exemplo Simplificado

1. A mensagem **"HELLO"** é digitada.
2. A letra **"H"** passa pelo plugboard, pelos rotores e pelo refletor, retornando como **"X"**.
3. O rotor gira uma posição.
4. A próxima letra, **"E"**, é cifrada de maneira diferente por causa da nova posição dos rotores.
5. O processo continua para as letras restantes.

**Resultado**: "HELLO" pode ser cifrada como algo como **"XBGTR"**.

---

## Quebra da Enigma

A máquina Enigma foi considerada inquebrável, mas os esforços de matemáticos poloneses (como Marian Rejewski) e, mais tarde, do **Bletchley Park** no Reino Unido, liderado por **Alan Turing**, levaram ao desenvolvimento de métodos e máquinas (como a **Bombe**) que decifraram o código. Isso foi um dos fatores que influenciaram o desfecho da Segunda Guerra Mundial.
