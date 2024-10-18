def determinar_signo(numero):
    if numero > 0:
        return "Positivo"
    elif numero < 0:
        return "Negativo"
    else:
        return "Cero"

# Ejemplo de uso:
numero = -5
print(determinar_signo(numero))  # Salida: "Negativo"
