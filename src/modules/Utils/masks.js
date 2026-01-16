export function phoneMask(telefone) {
    
    let value = telefone.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else if (value.length > 0) {
        value = value.replace(/^(\d{0,2})/, "($1");
    }

    return value;
};
