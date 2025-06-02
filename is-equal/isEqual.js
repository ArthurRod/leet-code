// Implements isEqual

// My original approach / Minha solução
function isEqual(value1, value2) {
  const isArray = Array.isArray(value1, value2);
  const isObject = typeof value1 === "object" && typeof value2 === "object";

  // Arrays
  if (isArray) {
    let isEqual = false;

    if (value1.length === value2.length) {
      for (let i = 0; i < value1.length; i++) {
        if (value1[i] === value2[i]) {
          isEqual = true;
        } else {
          isEqual = false;

          return isEqual;
        }
      }
    }

    return isEqual;
  }
  // Objects
  else if (isObject) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    let isEqual = false;

    if (keys1.length === keys2.length) {
      for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] === keys2[i]) {
          isEqual = true;
        } else {
          isEqual = false;

          return isEqual;
        }
      }
    } else {
      isEqual = false;

      return isEqual;
    }

    const values1 = Object.values(value1);
    const values2 = Object.values(value2);

    if (values1.length === values2.length) {
      for (let i = 0; i < values1.length; i++) {
        const isArray = Array.isArray(values1[i], values2[i]);
        const isObject =
          typeof values1[i] === "object" && typeof values2[i] === "object";

        if (isArray) {
          if (values1[i].length === values2[i].length) {
            for (let i = 0; i < values1[i].length; i++) {
              for (let j = 0; j < values2[i].length; j++) {
                if (values1[i] === values2[i]) {
                  isEqual = true;
                } else {
                  isEqual = false;

                  return isEqual;
                }
              }
            }
          } else {
            isEqual = false;

            return isEqual;
          }
        } else if (isObject) {
          const keys1 = Object.keys(values1[i]);
          const keys2 = Object.keys(values2[i]);

          let isEqual = false;

          if (keys1.length === keys2.length) {
            for (let i = 0; i < keys1.length; i++) {
              if (keys1[i] === keys2[i]) {
                isEqual = true;
              } else {
                isEqual = false;

                return isEqual;
              }
            }
          } else {
            isEqual = false;

            return isEqual;
          }

          const insideValues1 = Object.values(values1[i]);
          const insideValues2 = Object.values(values2[i]);

          if (insideValues1.length === insideValues2.length) {
            for (let i = 0; i < insideValues1.length; i++) {
              if (insideValues1[i] === insideValues2[i]) {
                isEqual = true;
              } else {
                isEqual = false;

                return isEqual;
              }
            }
          } else {
            isEqual = false;

            return isEqual;
          }
        } else {
          if (values1[i] === values2[i]) {
            isEqual = true;
          } else {
            isEqual = false;

            return isEqual;
          }
        }
      }
    } else {
      isEqual = false;

      return isEqual;
    }

    return isEqual;
  }

  // Primitives
  return Object.is(value1, value2);
}

// Improved/optimal solution / Melhor solução
function isEqual(value1, value2) {
  // Primitives
  if (value1 === value2) return true;

  if (
    value1 === null ||
    value2 === null ||
    typeof value1 !== "object" ||
    typeof value2 !== "object"
  ) {
    return false;
  }

  // Arrays
  if (Array.isArray(value1) !== Array.isArray(value2)) return false;

  // Objects
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!isEqual(value1[key], value2[key])) return false;
  }

  return true;
}

// My learning / Aprendizado:

// Aprendi que o método Array.isArray() pode ser usado diretamente para verificar se um valor é um array,
// o que evita a necessidade de verificações manuais ou iterações desnecessárias.

// Também percebi que não preciso usar Object.values() para acessar os valores de um objeto:
// posso simplesmente usar a chave diretamente, como em a[key], para comparar os valores.

// Além disso, descobri que posso usar recursivamente a própria função isEqual(a[key], b[key])
// para comparar objetos aninhados de forma limpa e eficiente.

// O uso do for...of foi essencial nesse processo, pois permitiu:
// - Iterar sobre as chaves usando Object.keys()
// - Verificar a existência de chaves com includes()
// - Comparar os valores com clareza usando isEqual()

// English

// I learned that the Array.isArray() method can be used directly to check if a value is an array,
// which avoids the need for manual checks or unnecessary iteration.

// I also realized that I don't need to use Object.values() to access an object's values —
// I can simply use a[key] to retrieve and compare values.

// Additionally, I discovered that I can recursively call the isEqual(a[key], b[key]) function
// to cleanly and effectively compare nested objects.

// Using for...of was crucial in this process, as it allowed me to:
// - Iterate over keys using Object.keys()
// - Use includes() to check if a key exists in the other object
// - Clearly compare values using isEqual()
