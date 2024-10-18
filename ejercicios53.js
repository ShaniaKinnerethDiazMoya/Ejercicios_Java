def contar_minusculas(cadena):
    contador = sum(1 for letra in cadena if letra.islower())
    return contador

# Ejemplo de uso:
cadena = "Hola Mundo"
print(contar_minusculas(cadena))  # Salida: 7
