export function currency(value: string) {
  value = value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");

  const aux = parseInt(value.replace(/[^\d]+/g, ""));

  if (!aux || aux < 1) {
    value = "R$ 0,00";
    return "R$ 0,00";
  }

  if (aux < 10) {
    value = `R$ 0,0${aux}`;
    return `R$ 0,0${aux}`;
  }

  if (aux < 100) {
    value = `R$ 0,${aux}`;
    return `R$ 0,${aux}`;
  }

  if (aux < 1000) {
    value = `R$ ${String(aux).charAt(0)},${String(aux).charAt(1)}${String(
      aux
    ).charAt(2)}`;
    return `R$ ${String(aux).charAt(0)},${String(aux).charAt(1)}${String(
      aux
    ).charAt(2)}`;
  }

  return `R$ ${value}`;
}

export function cep(value: string) {
  value = value
    .replace(/\D+/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
  return value;
}

export function cpf(value: string) {
  value = value
    .replace(/\D+/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

  return value;
}
export function cnpj(value: string) {
  value = value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
  return value;
}

export function cpf_cnpj(value: string) {
  if (value.replace(/\D+/g, "").length < 12) {
    value = value
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  } else {
    value = value
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }
  return value;
}

export function card(value: string) {
  value = value.replace(/\D+/g, "");

  if (value.length > 19) {
    value = value.substring(0, 19);
  }

  if (value.length < 16) {
    value = value
      .replace(/\D+/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{6})(\d)/, "$1 $2")
      .replace(/(\d)/, "$1");
  }

  if (value.replace(/\D+/g, "").length === 16) {
    value = value
      .replace(/\D+/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})/, "$1");
  }

  if (value.replace(/\D+/g, "").length > 16) {
    value = value
      .replace(/\D+/g, "")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d)/, "$1");
  }

  return value.trim();
}

export function cvv(value: string) {
  value = value.replace(/\D+/g, "").replace(/(\d{4})\d+?$/, "$1");

  return value;
}

export function phone(value: string) {
  value = value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");

  return value;
}

export function data(value: string) {
  value = value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{4})\d+?$/, "$1");

  return value;
}

export function onlyNumbers(value: string) {
  value = value.replace(/\D+/g, "");

  return value;
}

export function onlyLetters(value: string) {
  value = value.replace(/\d+/g, "");

  return value;
}
