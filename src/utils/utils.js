class Utils {
  // Validador de CPF
  validaCPF(cpf) {
    const cpfSemPontos = cpf.replace(/\D/g, "");

    if (cpfSemPontos.length !== 11) {
      return false;
    }

    const cpfNumeros = cpfSemPontos.substring(0, 9);
    const cpfDigitos = cpfSemPontos.substring(9);

    let soma = 0;

    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfNumeros.charAt(i)) * (10 - i);
    }

    let resto = soma % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpfDigitos.charAt(0))) {
      return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfNumeros.charAt(i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== parseInt(cpfDigitos.charAt(1))) {
      return false;
    }

    return true;
  }

  // Outra função
  verificarEmail() {}
}

export default Utils;
