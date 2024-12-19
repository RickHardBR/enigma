        // Rotor configurations
        const rotor1 = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
        const rotor2 = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
        const rotor3 = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
        const reflector = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

        const rotors = [rotor1, rotor2, rotor3];
        let rotorPositions = [0, 0, 0];

        function resetRotorPositions() {
            rotorPositions = [0, 0, 0];
        }

        function setRotorPositionsFromKey(key) {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            rotorPositions = key.toUpperCase().split('').slice(0, 3).map(char => {
                return alphabet.indexOf(char) % 26;
            });
            while (rotorPositions.length < 3) rotorPositions.push(0); // Ensure 3 positions
        }

        function stepRotors() {
            for (let i = 0; i < rotorPositions.length; i++) {
                rotorPositions[i] = (rotorPositions[i] + 1) % 26;
                if (rotorPositions[i] !== 0) break;
            }
        }

        function substitute(letter, rotor, position, reverse = false) {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let index = (alphabet.indexOf(letter) + position) % 26;
            if (reverse) {
                index = rotor.indexOf(alphabet[index]);
            } else {
                index = alphabet.indexOf(rotor[index]);
            }
            return alphabet[(index - position + 26) % 26];
        }

        function encryptLetter(letter) {
            for (let i = 0; i < rotors.length; i++) {
                letter = substitute(letter, rotors[i], rotorPositions[i]);
            }

            letter = reflector["ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter)];

            for (let i = rotors.length - 1; i >= 0; i--) {
                letter = substitute(letter, rotors[i], rotorPositions[i], true);
            }

            stepRotors();

            return letter;
        }

        function processMessage(message) {
            let result = "";
            for (let char of message) {
                if (/[A-Z]/.test(char)) {
                    result += encryptLetter(char);
                } else {
                    result += char;
                }
            }
            return result;
        }

        function encryptMessage() {
            const key = document.getElementById("key").value;
            if (!key) {
                alert("Por favor, insira uma palavra-chave.");
                return;
            }
            setRotorPositionsFromKey(key);
            const message = document.getElementById("message").value.toUpperCase();
            const encryptedMessage = processMessage(message);
            document.getElementById("result").innerText = encryptedMessage;
        }

        function decryptMessage() {
            const key = document.getElementById("key").value;
            if (!key) {
                alert("Por favor, insira a palavra-chave correta.");
                return;
            }
            setRotorPositionsFromKey(key);
            const encryptedMessage = document.getElementById("message").value.toUpperCase();
            const decryptedMessage = processMessage(encryptedMessage);
            document.getElementById("result").innerText = decryptedMessage;
        }

        function clearFields() {
            document.getElementById("key").value = "";
            document.getElementById("message").value = "";
            document.getElementById("result").innerText = "Sua mensagem criptografada ou descriptografada aparecerá aqui";
        }
